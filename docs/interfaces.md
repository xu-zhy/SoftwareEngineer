# API 

## 通过省份名称获取景点信息
- **URL**: http://localhost:8080/scenicSpot/byProvince?provinceName=广东省
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
    | landmark     | String | 是否地标                  |
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
              "latitude": "23.126736",
              "landmark": "0",
              "province": {
                  "provinceId": "2",
                  "provinceName": "广东省"
              }
          },
          {
              "sceneId": "6111",
              "sceneName": "陈树人纪念馆",
              "cityName": "广州",
              "telephone": "87782436",
              "address": "署前路10号（东山口地铁站E口步行110米）",
              "sceneClass": null,
              "longitude": "113.295403",
              "latitude": "23.12314",
              "landmark": "0",
              "province": {
                  "provinceId": "2",
                  "provinceName": "广东省"
              }
          }
      ]
    ```
  
## 通过省份名字返回地标景点
> ！！！未支持图片返回！！！
- **URL**: http://localhost:8080/scenicSpot/landmarks?provinceName=广东省
- **方法**: GET
- **描述**: 根据省份名称（中文）获取该省份的所有地标景点的信息。
- **请求参数**：

    | 参数名       | 类型   | 必填 | 描述            |  
    | :------------: | :------: | :----: |   :---------------: |  
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
  | landmark     | String | 是否地标                  |
- **响应示例**：
    ```json
    [
        {
            "sceneId": "6121",
            "sceneName": "西汉南越王博物馆",
            "cityName": "广州",
            "telephone": "36182920",
            "address": "解放北路867号",
            "sceneClass": null,
            "longitude": "113.261019",
            "latitude": "23.137814",
            "landmark": "1",
            "province": {
                "provinceId": "2",
                "provinceName": "广东省"
            }
        },
        {
            "sceneId": "6134",
            "sceneName": "广州市越秀公园",
            "cityName": "广州",
            "telephone": "86661950;83604271",
            "address": "解放北路988号",
            "sceneClass": null,
            "longitude": "113.265506",
            "latitude": "23.140136",
            "landmark": "1",
            "province": {
                "provinceId": "2",
                "provinceName": "广东省"
            }
        }
    ]
    ```