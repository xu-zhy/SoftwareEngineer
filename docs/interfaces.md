# API 

## 通过省份名称获取景点信息
- **URL**: http://localhost:8080/scenicSpot/byProvince?provinceName=广东
- **方法**: GET
- **描述**: 根据省份名称（中文）查询该省份的所有景区信息。
- **请求参数**：

    | 参数名       | 类型   | 必填 | 描述            |
    | :------------: | :------: | :----: | :---------------: |
    | provinceName | String | 是   | 省份名称的拼音 |
- **响应参数**：
    | 字段名       | 类型   | 描述                     |  
    | :------------ | :------: | :------------------------ |  
    | sceneId      | String | 景区ID                   |  
    | sceneName    | String | 景区名称                 |  
    | cityName     | String | 城市名称                 |  
    | telephone    | String | 联系电话                 |  
    | address      | String | 地址                     |  
    | sceneClass   | String | 景区等级                 |  
    | longitude    | String | 经度                     |  
    | latitude     | String | 纬度                     |
- **响应示例**：
    ```json
    [
        {
            "sceneId": "6110",
            "sceneName": "北阁",
            "cityName": "广州",
            "telephone": null,
            "address": "黄埔大道西广州珠江新城希尔顿欢朋酒店",
            "sceneClass": null,
            "longitude": "113.342728",
            "latitude": "23.126736"
        },
        {
            "sceneId": "6111",
            "sceneName": "南山",
            "cityName": "深圳",
            "telephone": null,
            "address": "南山大道南山公园",
            "sceneClass": null,
            "longitude": "113.938728",
            "latitude": "22.536736"
        }
    ]
    ```