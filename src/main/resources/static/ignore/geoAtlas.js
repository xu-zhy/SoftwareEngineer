var map = new AMap.Map('container', {
    zoom: 4,
    center: [104.114129, 37.550339]
});

// 读取转换后的GeoJSON数据
var chinaGeoJson;
var provincesGeoJson;

fetch('china.geo.json')
    .then(response => response.json())
    .then(data => {
        chinaGeoJson = data;
        loadChinaMap();
    });

fetch('provinces.geo.json')
    .then(response => response.json())
    .then(data => {
        provincesGeoJson = data;
    });

function loadChinaMap() {
    // map.clearMap();
    new AMap.GeoJSON({
        geoJSON: chinaGeoJson,
        getPolygon: function (geojson, lnglats) {
            return new AMap.Polygon({
                path: lnglats,
                fillColor: '#BFEFFF',
                fillOpacity: 0.7,
                strokeColor: '#CC66CC',
                strokeWeight: 1
            });
        }
    }).setMap(map);
    map.setZoomAndCenter(4, [104.114129, 37.550339]);
}

function loadProvinceMap(provinceName) {
    // map.clearMap();
    var provinceGeoJson = provincesGeoJson[provinceName];
    new AMap.GeoJSON({
        geoJSON: provinceGeoJson,
        getPolygon: function (geojson, lnglats) {
            return new AMap.Polygon({
                path: lnglats,
                fillColor: '#99CCCC',
                fillOpacity: 0.7,
                strokeColor: '#CC66CC',
                strokeWeight: 1
            });
        }
    }).setMap(map);
    // 计算省份的中心点和合适的缩放级别
    var bounds = new AMap.Bounds(provinceGeoJson.bbox.slice(0, 2), provinceGeoJson.bbox.slice(2, 4));
    map.setBounds(bounds);
}

map.on('click', function (e) {
    var pixel = map.lngLatToContainer(e.lnglat);
    map.getCityByContainer(pixel, function (err, data) {
        if (data && data.adcode) {
            var provinceName = data.province;
            if (provinceName && provincesGeoJson[provinceName]) {
                loadProvinceMap(provinceName);
            }
        } else {
            loadChinaMap();
        }
    });
});
