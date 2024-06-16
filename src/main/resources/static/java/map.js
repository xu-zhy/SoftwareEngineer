var normalBackFill = "white";
var normalBorder = "#888888";
var selectBackFill = "rgba(20, 120, 230, 0.3)";
// var selectBorder = "#ADFF2F";

var adcode2zoom = {
    '520000':7,//贵州
    '540000':6,//西藏
    '530000':6,//云南
    '500000':7,//重庆
    '360000':7,//江西
    '340000':7,//安徽
    '510000':6,//四川
    '350000':7,//福建
    '430000':7,//湖南
    '420000':7,//湖北
    '410000':7,//河南
    '330000':7,//浙江
    '640000':7,//宁夏
    '650000':5,//新疆
    '440000':7,//广东
    '370000':7,//山东
    '450000':7,//广西
    '630000':6,//青海
    '320000':7,//江苏
    '140000':7,//山西
    '460000':8,// 海南
    '310000':8,//上海
    '110000':8, // 北京
    '130000':6, // 河北
    '230000':5, // 黑龙江
    '220000':7,// 吉林
    '210000':7, //辽宁
    '150000':5,//内蒙古
    '120000':8,// 天津
    '620000':6,// 甘肃
    '610000':6,// 甘肃
    '710000':7, //台湾
    '810000':11, //香港
    '820000':12//澳门
}

var provinceData = [];

var disCountry = new AMap.DistrictLayer.Country({
    zIndex: 10,
    SOC: "CHN",
    depth: 1,
    styles: {
        'nation-stroke': "red",
        "province-stroke": normalBorder,
        fill: normalBackFill,
    },
});

var disProvince = new AMap.DistrictLayer.Province({
    zIndex: 12,
    adcode: "",
    depth: 1,
    styles: {
        "city-stroke": normalBorder,
        fill: normalBackFill,
    },
});

var layerProvince = new AMap.LabelsLayer({
    collision: false, // 开启标注避让
    animation: true, // 开启标注淡入动画
});

var map = new AMap.Map("container", {
    zooms: [4, 12],
    center: [106.122082, 33.719192],
    zoom: 4,
    isHotspot: false, // 是否开启地图热点和标注的 hover 效果
    defaultCursor: "pointer",
    layers: [disCountry, disProvince, new AMap.TileLayer.Satellite()],
    viewMode: "2D",
    resizeEnable: true,
});

var districtSearch = new AMap.DistrictSearch({
    level: "country",
    subdistrict: 1, //  显示下级行政区级数
});

districtSearch.search("中国", function (status, result) {
    provinceData = result.districtList[0].districtList;
});

map.on("complete", function () {
    for (var i = 0; i < provinceData.length; i++) {
        var province = provinceData[i];
        var marker = new AMap.LabelMarker({
            name: province.name,
            position: [province.center.lng, province.center.lat],
            zIndex: 10,
            text: {
                content: province.name,
                direction: "center",
                style: {
                    fontSize: 10,
                    fontWeight: "normal",
                    fillColor: "#fff",
                    backgroundColor: "rgb(246,137,38)",
                    borderColor: "#fff",
                },
            },
        });
        layerProvince.add(marker);
    }
    map.add(layerProvince);
});

map.on("click", function (ev) {
    var px = ev.pixel;
    var props = disCountry.getDistrictByContainerPos(px); // 拾取所在位置的行政区
    disProvince.setDistricts(props.adcode + ""); // 显示当前点击的省份

    map.setCenter([props.x, props.y]);
    map.setZoom(adcode2zoom[props.adcode]);

    disProvince.setStyles({
        'fill': selectBackFill
    });
});

