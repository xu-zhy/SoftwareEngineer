// 基础属性
var normalBackFill = "#FFFFE9";
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
    '410000':6,//河南
    '330000':7,//浙江
    '640000':7,//宁夏
    '650000':5,//新疆
    '440000':7,//广东
    '370000':7,//山东
    '450000':7,//广西
    '630000':6,//青海
    '320000':7,//江苏
    '140000':6,//山西
    '460000':8,// 海南
    '310000':8,//上海
    '110000':8, // 北京
    '130000':6, // 河北
    '230000':5, // 黑龙江
    '220000':6,// 吉林
    '210000':6, //辽宁
    '150000':5,//内蒙古
    '120000':8,// 天津
    '620000':6,// 甘肃
    '610000':6,// 甘肃
    '710000':7, //台湾
    '810000':11, //香港
    '820000':12//澳门
}

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

// 省份数据，用来设置每个省份名字的文本框
var provinceData = [];
var layerProvince = new AMap.LabelsLayer({
    collision: false, // 开启标注避让
    animation: true, // 开启标注淡入动画
});

var map = new AMap.Map("container", {
    zooms: [4, 12],
    center: [106.122082, 33.719192],
    zoom: 4,
    isHotspot: true, // 是否开启地图热点和标注的 hover 效果
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


// 读取省份地标数据
var landmarks_data = [];
function fetchLandmarksByProvince(provinceName) {
    $.ajax({
        url: `/landmark/byProvince`,
        type: 'GET',
        data: { provinceName: provinceName },
        success: function(data) {
            // 将数据存储到全局变量中
            landmarks_data = data;
            console.log('Landmarks Data:', landmarks_data);
        },
        error: function(xhr, status, error) {
            console.error('Failed to fetch landmarks:', status, error);
        }
    });
}


// map 生成事件，仅出现在刚开始的时候
map.on("complete", function () {
    for (var i = 0; i < provinceData.length; i++) {
        var province = provinceData[i];
        var layer_marker = new AMap.LabelMarker({
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
        layerProvince.add(layer_marker);
    }
    map.add(layerProvince);
});


// map 双击事件
var scene_markers = [];
var gprops;

map.on("dblclick", function (ev) {
    var px = ev.pixel;
    var props = disCountry.getDistrictByContainerPos(px); // 拾取所在位置的行政区
    disProvince.setDistricts(props.adcode + ""); // 显示当前点击的省份

    gprops = props; // !
    console.log('1');
    fetchLandmarksByProvince('广东省');
    console.log('2');

    // 设置目标省份缩放和中心点

    map.setCenter([props.x, props.y]);
    map.setZoom(adcode2zoom[props.adcode]);
    disProvince.setStyles({
        'fill': selectBackFill
    });

    // 获取景点数据，此处直接删除历史数据，可以添加一个存储历史数据，如果是同省份则不变的功能
    map.clearInfoWindow();
    map.remove(layerProvince); // 必须 remove，否则消息窗体无法显示
    map.remove(scene_markers);
    scene_markers.length = 0;

    // for
    var scene_marker = new AMap.Marker({
        // icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
        position: ev.lnglat
    });

    scene_marker.on('click', function() {
        // 实例化信息窗体
        var title = '方恒假日酒店<span style="font-size:11px;color:#F00;">价格:318</span>',
            content = [];
        content.push("<img src='http://tpc.googlesyndication.com/simgad/5843493769827749134'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");
        content.push("电话：010-64733333");
        content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");

        var infoWindow = new AMap.InfoWindow({
            isCustom: true,  //使用自定义窗体
            content: createInfoWindow(title, content.join("<br/>")),
            offset: new AMap.Pixel(16, -45)
        });

        infoWindow.open(map, scene_marker.getPosition());
    });

    scene_markers.push(scene_marker);
    map.add(scene_markers);

    // 更新标注信息
    updateInfo(props);
});

console.log('\ngprops:');
console.log(gprops);
console.dir(gprops);
console.log('\nprovinceData:');
console.log(provinceData);
console.dir(provinceData);

// map 右击回到大地图视野并初始化
map.on("rightclick", function () {
    map.setCenter([106.122082, 33.719192]);
    map.setZoom(4);
    map.add(layerProvince);
    map.remove(scene_markers);
    map.clearInfoWindow();
    scene_markers.length = 0;
});


//构建自定义信息窗体
function createInfoWindow(title, content) {
    var info = document.createElement("div");
    info.className = "custom-info input-card content-window-card";

    //可以通过下面的方式修改自定义窗体的宽高
    //info.style.width = "400px";
    // 定义顶部标题
    var top = document.createElement("div");
    var titleD = document.createElement("div");
    var closeX = document.createElement("img");
    top.className = "info-top";
    titleD.innerHTML = title;
    closeX.src = "https://webapi.amap.com/images/close2.gif";
    closeX.onclick = map.clearInfoWindow();

    top.appendChild(titleD);
    top.appendChild(closeX);
    info.appendChild(top);

    // 定义中部内容
    var middle = document.createElement("div");
    middle.className = "info-middle";
    middle.style.backgroundColor = 'white';
    middle.innerHTML = content;
    info.appendChild(middle);

    // 定义底部内容
    var bottom = document.createElement("div");
    bottom.className = "info-bottom";
    bottom.style.position = 'relative';
    bottom.style.top = '0px';
    bottom.style.margin = '0 auto';
    var sharp = document.createElement("img");
    sharp.src = "https://webapi.amap.com/images/sharp.png";
    bottom.appendChild(sharp);
    info.appendChild(bottom);
    return info;
}


// 标注信息函数
document.getElementsByClassName('amap-mcode')[0].innerHTML = '-GS(2021)648号'
function updateInfo(props) {
    document.getElementById('zh_name').innerText = props.NAME_CHN;
    document.getElementById('adcode').innerText = props.adcode;
    // 添加一个有几个知名景点的展示量
}