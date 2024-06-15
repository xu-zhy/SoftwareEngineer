var map = new AMap.Map('container', {
    zoom: 4,
    center: [104.114129, 37.550339]
});

fetch('/provinces')
    .then(response => response.json())
    .then(data => {
        data.forEach(province => {
            var geoJson = JSON.parse(province.geoJson);
            var district = new AMap.DistrictLayer.Province({
                zIndex: 12,
                adcode: [province.id],
                depth: 2,
                styles: {
                    'fill': function(properties) {
                        return '#BFEFFF';
                    },
                    'province-stroke': function(properties) {
                        return '#CC66CC';
                    },
                    'city-stroke': function(properties) {
                        return '#CC66CC';
                    }
                }
            });
            district.setMap(map);
            district.on('mouseover', function(e) {
                map.setFeatures(['bg', 'point', 'road']);
                district.setStyles({
                    'fill': function(properties) {
                        return properties.adcode === province.id ? '#99CCCC' : '#BFEFFF';
                    }
                });
            });
            district.on('mouseout', function(e) {
                district.setStyles({
                    'fill': '#BFEFFF'
                });
            });
            district.on('click', function(e) {
                map.setZoomAndCenter(7, e.lnglat);
                // 添加其他交互逻辑，如按钮显示等
            });
        });
    })
    .catch(error => console.error('Error:', error));
