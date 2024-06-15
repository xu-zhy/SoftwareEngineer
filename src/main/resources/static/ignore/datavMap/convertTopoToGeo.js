const fs = require('fs');
const topojson = require('topojson-client');

// 读取文件内容
const layers = JSON.parse(fs.readFileSync('layers.json', 'utf8'));
const trees = JSON.parse(fs.readFileSync('trees.json', 'utf8'));

// 转换TopoJSON为GeoJSON的函数
function convertTopoToGeo(topoJsonData, name) {
    const geoJsonData = topojson.feature(topoJsonData, topoJsonData.objects.collection);
    geoJsonData.name = name;
    return geoJsonData;
}

// 保存GeoJSON数据的函数
function saveGeoJson(data, filename) {
    fs.writeFileSync(filename, JSON.stringify(data));
    console.log(`${filename} saved!`);
}

// 处理中国地图的GeoJSON数据
const chinaTopoJson = layers.payload;
const chinaGeoJson = convertTopoToGeo(chinaTopoJson, layers.name);
saveGeoJson(chinaGeoJson, 'china.geo.json');

// 处理省份地图的GeoJSON数据
provincesGeoJson = {};

function processChildren(children) {
    for (var i = 1, l = trees.length ; i < l ; i++) {
        const name = trees[i].name;
        const treeID = trees[i].treeID;
        const childData = children[treeID];

        const provinceTopoJson = childData.payload;
        const provinceGeoJson = convertTopoToGeo(provinceTopoJson, name);
        provincesGeoJson[provinceGeoJson.name] = provinceGeoJson;
    }
}

processChildren(layers.children);

// 将省份GeoJSON数据保存为一个文件
saveGeoJson(provincesGeoJson, 'provinces.geo.json');
