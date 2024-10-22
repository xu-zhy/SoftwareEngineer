# <span id="head1">API </span>
- [API ](#head1)
    - [ 通过省份名称获取景点信息](#head2)
    - [ 通过省份名字返回地标景点](#head3)
    - [ 通过景区名称获得景区图片](#head4)
    - [ 通过景区名称获得景区信息](#head5)
    - [ 用户登录逻辑](#head6)
    - [ 用户注册逻辑](#head7)
    - [ 景点搜索功能](#head8)
    - [ 获取当前登录用户](#head9)
    - [ 通过用户名查询用户收藏景点](#head10)
    - [ 用户添加收藏](#head11)
    - [ 检查用户收藏状态](#head12)

## <span id="head2"> 通过省份名称获取景点信息</span>
- **URL**: http://localhost:8080/scenicSpot/byProvince?provinceName=广东省
- **方法**: GET
- **描述**: 根据省份名称（中文）查询该省份的所有景区信息。
- **请求参数**：
  | 参数名       | 类型   | 必填 |    描述    |  
  |:------------:|:------:|:----:|:--------:|  
  | provinceName | String | 是   | 省份名称（中文） |
- **响应参数**：  
  | 字段名      | 类型   | 描述             |  
  |:------------|:------:|:-----------------|  
  | sceneId     | String | 景区ID           |  
  | sceneName   | String | 景区名称         |  
  | cityName    | String | 城市名称         |  
  | telephone   | String | 联系电话         |  
  | address     | String | 地址             |  
  | sceneClass  | String | 景区类别         |  
  | longitude   | String | 经度             |  
  | latitude    | String | 纬度             |  
  | province    | Class  | 省份类（外键依赖）|
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

## <span id="head3"> 通过省份名字返回地标景点</span>
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

## <span id="head4"> 通过景区名称获得景区图片</span>
- **URL**: http://localhost:8080/scenicSpot/image?sceneName=广州塔
- **方法**: GET
- **描述**: 根据景区名称（中文）获取该景区的图片资源。
- **请求参数**：

  | 参数名       | 类型   | 必填 |    描述    |  
      |:------------:|:------:|:----:|:--------:|  
  | sceneName | String | 是   | 景区名字 |  
- **响应**: 返回图片文件

## <span id="head5"> 通过景区名称获得景区信息</span>
- **URL**: http://localhost:8080/scenicSpot/bySceneName?sceneName=广州塔
- **方法**: GET
- **描述**: 根据景区名称（中文）获取该景区的信息
- **请求参数**:
  | 参数名       | 类型   | 必填 |    描述    |  
  |:------------:|:------:|:----:|:--------:|  
  | sceneName | String | 是   | 景区名字 |
- **响应参数**:
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
- **响应示例**
    ```json
    {
        "sceneId": "1865",
        "sceneName": "天安门广场",
        "cityName": "北京",
        "telephone": "63095745",
        "address": "东长安街与广场东侧路交叉口西南角",
        "sceneClass": null,
        "longitude": "116.397552",
        "latitude": "39.903568",
        "province": {
            "provinceId": "0",
            "provinceName": "北京市"
        }
    }
    ```
## <span id="head6"> 用户登录逻辑</span>
- **URL**: http://localhost:8080/page/signin
- **方法**: POST
- **描述**: 用户登录
- **请求参数**:
  | 参数名       | 类型   | 必填 |    描述    |  
  |:------------:|:------:|:----:|:--------:|  
  | username | String | 是   | 用户名字 |
  | passward | String | 是   | 用户密码 |
- **响应状态**:
    - 200: OK
    - 401: Unauthorized
- **参考示例**:
    ```html
    <script>
        document.getElementById('loginForm').addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
    
            fetch('/page/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
                .then(response => {
                    if (response.ok) {
                        return response.text();
                    } else {
                        return response.text().then(text => { throw new Error(text) });
                    }
                })
                .then(message => {
                    document.getElementById('message').textContent = message;
                    window.location.href = '/index.html'; // Assuming there's a welcome page after successful login
                })
                .catch(error => {
                    document.getElementById('message').textContent = error.message;
                });
        });
    </script>
    ```

## <span id="head7"> 用户注册逻辑</span>
- **URL**: http://localhost:8080/page/signup
- **方法**: POST
- **描述**: 用户注册
- **请求参数**:
  | 参数名       | 类型   | 必填 |    描述    |  
  |:------------:|:------:|:----:|:--------:|  
  | username | String | 是   | 用户名字 |
  | passward | String | 是   | 用户密码 |
  | email | String | 是   | 用户邮箱 |
- **响应状态**:
    - 200: OK
    - 409: Conflict
- **参考示例**:
    ```html
    <script>
        document.getElementById('signupForm').addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const email = document.getElementById('email').value;
    
            fetch('/page/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password, email})
            })
                .then(response => {
                    if (response.ok) {
                        return response.text();
                    } else {
                        return response.text().then(text => { throw new Error(text) });
                    }
                })
                .then(message => {
                    document.getElementById('message').textContent = message;
                    window.location.href = '/page/signin.html'; // Redirect to login page after successful signup
                })
                .catch(error => {
                    document.getElementById('message').textContent = error.message;
                });
        });
    </script>
    ```

## <span id="head8"> 景点搜索功能</span>
- **URL**: http://localhost:8080/scenicSpot/search?keyword=公园
- **方法**: GET
- **描述**: 通过关键词搜索
- **请求参数**:
  | 参数名       | 类型   | 必填 |    描述    |  
  |:------------:|:------:|:----:|:--------:|  
  | keywords | String | 是   | 关键词 |
- **响应参数**: 匹配关键词的景点信息列表
- **测试示例**:
    ```html
    <body>
    <div class="search-container">
        <input type="text" id="searchInput" placeholder="Search products...">
        <button onclick="searchScenicSpot()">Search</button>
        <ul id="scenicSpotsList"></ul>
    </div>
    
    <script>
        function searchScenicSpot() {
            var keyword = document.getElementById('searchInput').value.trim();
    
            fetch('/scenicSpot/search?keyword=' + encodeURIComponent(keyword))
                .then(response => response.json())
                .then(scenicSpots => {
                    var scenicSpotsList = document.getElementById('scenicSpotsList');
                    scenicSpotsList.innerHTML = '';
                    scenicSpots.forEach(scenicSpot => {
                        var li = document.createElement('li');
                        li.textContent = scenicSpot.sceneName;
                        scenicSpotsList.appendChild(li);
                    });
                })
                .catch(error => {
                    console.error('Error searching scenicSpots:', error);
                    alert('Error searching scenicSpots');
                });
        }
    </script>
    </body>
    ```

## <span id="head9"> 获取当前登录用户</span>
- **URL**: http://localhost:8080/page/current-user
- **方法**: GET
- **描述**: 获得当前的登录用户
- **请求参数**: 无
- **相应参数**:
  | 参数名       | 类型   | 必填 |    描述    |  
  |:------------:|:------:|:----:|:--------:|  
  | userId | Long | 是   | 用户id |
  | username | String | 是 | 用户名 |
  | password | String | 是 | 用户密码 |
  | email | String | 是 | 用户邮箱 |
- **注意**: 未测试

## <span id="head10"> 通过用户名查询用户收藏景点</span>
- **URL**: http://localhost:8080/favorite/byUsername?username=lafe
- **方法**: GET
- **描述**: 通过用户名查询用户收藏景点
- **请求参数**:
  | 参数名       | 类型   | 必填 |    描述    |  
  |:------------:|:------:|:----:|:--------:|  
  | username | String | 是   | 用户名 |
- **响应参数**: 用户收藏的景点列表
- **响应示例**:
    ```json
    [
        {
            "sceneId": "18091",
            "sceneName": "广济桥",
            "cityName": "潮州",
            "telephone": "2222683",
            "address": "古城东门外",
            "sceneClass": null,
            "longitude": "116.65783",
            "latitude": "23.662303",
            "intro": "广济桥，俗称湘子桥，位于广东省潮州市湘桥区东门外韩江，为古代闽粤交通要道。与赵县赵州桥、惠安县洛阳桥及北京市芦沟桥并称“中国四大古桥”，集拱桥、梁桥及浮桥于一体，为中国第一座启闭式浮桥。",
            "province": {
                "provinceId": "2",
                "provinceName": "广东省"
            }
        },
        {
            "sceneId": "18092",
            "sceneName": "龙湖镇",
            "cityName": "潮州",
            "telephone": null,
            "address": "潮安区府前路一横街",
            "sceneClass": null,
            "longitude": "116.649561",
            "latitude": "23.55867",
            "intro": "龙湖古寨始建于南宋，现存古建筑有100多座，能体现宋、元、明、清各个历史时期的不同建筑风格，并且荟萃潮州的石雕、木雕、嵌瓷、彩绘和贝灰塑等典型的民间建筑工艺之精华，堪称“潮州古建筑博览”。",
            "province": {
                "provinceId": "2",
                "provinceName": "广东省"
            }
        }
    ]
    ```

## <span id="head11"> 用户添加收藏</span>
- **URL**: http://localhost:8080/favorite/add
- **方法**: POST
- **描述**: 用户添加收藏
- **请求参数**:
  | 参数名       | 类型   | 必填 |    描述    |  
  |:------------:|:------:|:----:|:--------:|
  | sceneId | String | 是   | 景点 id |
- **响应状态**:
    - 200: OK
    - 409: Conflict 
    - 401: UNAUTHORIZED
- **注意点**
    - 未测试是否成功实现

## <span id="head12"> 检查用户收藏状态</span>
- **URL**: http://localhost:8080/favorite/check?sceneId=1
- **方法**: GET
- **描述**: 检查用户是否已收藏
- **请求参数**:
  | 参数名       | 类型   | 必填 |    描述    |  
  |:------------:|:------:|:----:|:--------:|
  | sceneId | String | 是   | 景点 id |
- **响应状态**:
  - 401: UNAUTHORIZED
  - 302: FOUND
  - 404: NON_FOUND
- **注意点**
  - 未测试是否成功实现