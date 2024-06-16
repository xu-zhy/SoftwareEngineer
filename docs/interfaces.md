# API 

## 通过省份名称获取景点信息
- **URL**: http://localhost:8080/scenicSpot/byProvince?provinceName=广东省
- **方法**: GET
- **描述**: 根据省份名称（中文）查询该省份的所有景区信息。
- **请求参数**：

    | 参数名       | 类型   | 必填 |    描述    |
    |:------------:|:------:|:----:|:--------:|
    | provinceName | String | 是   | 省份名称（中文） |
- **响应参数**：
    | 字段名       | 类型   | 描述              |  
    |:------------|:------:|:------------------|  
    | sceneId      | String | 景区ID           |  
    | sceneName    | String | 景区名称         |  
    | cityName     | String | 城市名称         |  
    | telephone    | String | 联系电话         |  
    | address      | String | 地址             |  
    | sceneClass   | String | 景区类别          |  
    | longitude    | String | 经度              |  
    | latitude     | String | 纬度             |
    | province     | Class  | 省份类（外键依赖）  |
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
              "province": {
                  "provinceId": "2",
                  "provinceName": "广东省"
              }
          }
      ]
    ```
  
## 通过省份名字返回地标景点
> ！！！未支持图片返回！！！
- **URL**: http://localhost:8080/landmark/byProvince?provinceName=广东省
- **方法**: GET
- **描述**: 根据省份名称（中文）获取该省份的所有地标景点的信息。
- **请求参数**：

    | 参数名       | 类型   | 必填 |    描述    |  
    |:------------:|:------:|:----:|:--------:|  
    | provinceName | String | 是   | 省份名称（中文） |  
- **响应参数**：
  | 字段名       | 类型   | 描述                    |  
  |:------------|:------:|:------------------------|  
  | landmarkId      | String | 地标ID               |  
  | briefIntro    | String | 地标介绍               |  
  | scenicSpot     | Class | 景区类（外键依赖）      |  
  
- **响应示例**：
    ```json
    [
        {
            "landmarkId": "24",
            "briefIntro": "广州出土的南越王墓，历史文物丰富。",
            "scenicSpot": {
                "sceneId": "6121",
                "sceneName": "西汉南越王博物馆",
                "cityName": "广州",
                "telephone": "36182920",
                "address": "解放北路867号",
                "sceneClass": null,
                "longitude": "113.261019",
                "latitude": "23.137814",
                "province": {
                    "provinceId": "2",
                    "provinceName": "广东省"
                }
            }
        },
        {
            "landmarkId": "25",
            "briefIntro": "广州最大的综合性公园，五羊雕像是标志。",
            "scenicSpot": {
                "sceneId": "6134",
                "sceneName": "广州市越秀公园",
                "cityName": "广州",
                "telephone": "86661950;83604271",
                "address": "解放北路988号",
                "sceneClass": null,
                "longitude": "113.265506",
                "latitude": "23.140136",
                "province": {
                    "provinceId": "2",
                    "provinceName": "广东省"
                }
            }
        }
    ]
    ```