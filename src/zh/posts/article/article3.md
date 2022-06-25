---
icon: edit
date: 2022-06-02
category:
  - Python
  - fastAPI
tag:
  - Python
---
# FastAPI

## 1. 🚀安装

>📌**fastapi中文文档**
>
>https://fastapi.tiangolo.com/zh/tutorial/first-steps/

* 使用**pip**包管理工具安装：

```powershell
$ pip install fastapi[all] // 其中包括了fastapi 和服务器 uvicorn
```

* 也可以分开安装：

```powershell
$ pip install fastapi
$ pip install uvicorn[standard]

```

## 2. 🍪demo

### 2.1 项目的创建和运行

* 在vs code中新建`main.py`文件

```python
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World", "code": 200}

```

* 在终端输出以下命令运行服务器

```powershell
$ uvicorn main:app --reload

''' 输出如下结果则表示启动成功  '''
INFO:     Will watch for changes in these directories: ['F:\\python数据处理\\fastAPI']
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [10320] using watchgod
WARNING:  The --reload flag should not be used in production on Windows.
ERROR:    Error loading ASGI app. Could not import module "main".
INFO:     Stopping reloader process [10320]
```


运行成功后，在输出中会有下面这样一行信息：

```powershell
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
```

该行显示了你的应用在本机所提供服务的URL地址。

---

### 2.2 查看接口和接口文档

* 打开浏览器访问 [http://127.0.0.1:8000](http://127.0.0.1:8000/)，可以看到如下JSON数据：

```json
{"message":"Hello World","code":200}
```

* 交互式API文档：http://127.0.0.1:8000/docs。

![image-20220503204502886](http://182.61.149.102/fastapi/fastapi.png)

### 2.3 路径参数

```python
@app.get("/items/{item_id}")
async def read_item(item_id):
    return {"item_id": item_id}
```

路径参数 `item_id` 的值将作为参数 `item_id` 传递给返回值

* 运行实例并访问http://127.0.0.1:8000/items/foo，将会返回如下`JSON`数据：

```json
{"item_id":"foo"}
```

#### 2.3.1 有类型的数据参数

```python
@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}
```

在这个例子中，`item_id`被声明为`int`类型

* 传入的路径参数不为`int`时，会报如下错误：

```json
{
    "detail": [
        {
            "loc": [
                "path",
                "item_id"
            ],
            "msg": "value is not a valid integer",
            "type": "type_error.integer"
        }
    ]
}

```

#### 2.3.2 使用枚举类型的参数

```python
from enum import Enum

from fastapi import FastAPI


class ModelName(str, Enum):
    alexnet = "alexnet"
    resnet = "resnet"
    lenet = "lenet"


app = FastAPI()


@app.get("/models/{model_name}")
async def get_model(model_name: ModelName):
    if model_name == ModelName.alexnet:
        return {"model_name": model_name, "message": "Deep Learning FTW!"}

    if model_name.value == "lenet":
        return {"model_name": model_name, "message": "LeCNN all the images"}

    return {"model_name": model_name, "message": "Have some residuals"}
```

#### 2.3.3 请求体

* 只能传递`JSON`数据

```python
from fastapi import FastAPI
from typing import Optional
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

@app.post("/items/")
async def create_item(item: Item):
    return item
```

#### 2.3.4 表单数据

* 可以传递`FORM`表单数据

```python
from fastapi import FastAPI, Form
from pydantic import BaseModel

app = FastAPI()


@app.post("/login/")
async def login(username: str = Form(...), password: str = Form(...)):
    return {"username": username}
```

## 3. 📚接口文档

> 接口基准地址`BserURL:`**127.0.0.1:8000**

### 3.1 用户相关接口

#### 3.1.1 获取用户资料

> 基本信息

* **Path：**/api/users/me
* **Method：**GET

> 请求参数

Header

| 参数名称      | 参数值 | 是否必须 | 示例                                                         | 备注                |
| :------------ | ------ | -------- | ------------------------------------------------------------ | ------------------- |
| Authorization |        | 是       | Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU | 用户令牌token，必传 |

Body

| 名称    | 类型    | 是否必须 | 默认值 | 备注   | 其他信息 |
| ------- | ------- | -------- | ------ | ------ | -------- |
| user_id | integer | 必须     |        | 用户id |          |

> 返回数据

```json
{
  "phone": "string",
  "id": 1,
  "blockaddress": "fasfasg1sa5g45a4gasg1as5g5as1ga2s1ga5sad",
  "name": "pokemon",
  "avatar": "https://s1.ax1x.com/2022/05/07/OQeNjg.png",
  "intro": "TA还什么都没留下~",
  "folllow_count": 0,
  "fans_count": 0
}
```

| 名称         | 类型    | 是否必须 | 默认值                                    | 备注                     | 其他信息 |
| ------------ | ------- | -------- | ----------------------------------------- | ------------------------ | -------- |
| photo        | string  | 必须     |                                           | 用户手机号               |          |
| id           | integer | 必须     |                                           | 用户id                   |          |
| blockaddress | string  | 必须     |                                           | 用户区块链地址           |          |
| name         | string  | 必须     |                                           | 用户昵称                 |          |
| avatar       | string  | 必须     | https://s1.ax1x.com/2022/05/07/OQeNjg.png | 用户头像                 |          |
| intro        | string  | 必须     | "TA还什么都没留下~"                       | 用户简介                 |          |
| follow_count | integer | 必须     |                                           | 关注的数目               |          |
| fans_count   | integer | 必须     |                                           | 被关注的数目（粉丝数目） |          |



---

#### 3.1.2 更新用户资料

> 基本信息

* **Path：**/api/users/me
* **Method：**PUT

> 请求参数

Header

| 参数名称      | 参数值 | 是否必须 | 示例                                                         | 备注                |
| :------------ | ------ | -------- | ------------------------------------------------------------ | ------------------- |
| Authorization |        | 是       | Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU | 用户令牌token，必传 |

Body

|        |        |          |        |          |          |
| ------ | ------ | -------- | ------ | -------- | -------- |
| 名称   | 类型   | 是否必须 | 默认值 | 备注     | 其他信息 |
| name   | string | 非必须   |        | 昵称     |          |
| avatar | string | 非必须   |        | 头像     |          |
| intro  | string | 非必须   |        | 个人介绍 |          |

> 返回数据

```json
{
  "status": 200,
  "data": {
    "blockaddress": "fasfasg1sa5g45a4gasg1as5g5as1ga2s1ga5sad",
    "id": 3,
    "name": "string",
    "intro": "string",
    "folllow_count": 0,
    "phone": "ddd",
    "hashed_password": "$2b$12$6iZtvj45K1bajb6JYLi1Ne3FxwI6ES9HHdiR2rDuFNmozWgJMzLla",
    "avatar": "string",
    "fans_count": 0
  }
}
```

| 名称   | 类型   | 是否必须 | 默认值 | 备注             | 其他信息 |
| ------ | ------ | -------- | ------ | ---------------- | -------- |
| status | int    | 必须     |        | 状态码           |          |
| data   | object | 必须     |        | 更新后的用户信息 |          |

> 返回状态码

* 401 用户为登录认证
* 201 更新用户资料成功

#### 3.1.3 修改用户密码

> 基本信息

* **Path：**/api/users/pwd
* **Method：**PUT

> 请求参数

Header

| 参数名称      | 参数值 | 是否必须 | 示例                                                         | 备注                |
| :------------ | ------ | -------- | ------------------------------------------------------------ | ------------------- |
| Authorization |        | 是       | Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU | 用户令牌token，必传 |

Body

|          |        |          |        |        |          |
| -------- | ------ | -------- | ------ | ------ | -------- |
| 名称     | 类型   | 是否必须 | 默认值 | 备注   | 其他信息 |
| password | string | 必须     |        | 新密码 |          |

> 返回数据

```json
{
  "status": 201,
  "data": "修改用户密码成功"
}
```

| 名称   | 类型   | 是否必须 | 默认值 | 备注     | 其他信息 |
| ------ | ------ | -------- | ------ | -------- | -------- |
| status | int    | 必须     |        | 状态码   |          |
| data   | string | 必须     |        | 提示信息 |          |

> 返回状态码

* 401 用户为登录认证
* 201 修改用户密码成功





---

### 3.2 卡片接口相关接口

#### 3.2.1 获取卡片信息

> 基本信息

* **Path：**/cards/card_id}
* **Method：**GET

> 请求参数

Header

| 参数名称     | 参数值           | 是否必须 | 示例 | 备注 |
| :----------- | ---------------- | -------- | ---- | ---- |
| Content-Type | application/json | 是       |      |      |

Body

| 名称    | 类型    | 是否必须 | 默认值 | 备注   | 其他信息 |
| ------- | ------- | -------- | ------ | ------ | -------- |
| card_id | integer | 必须     |        | 卡片id |          |

> 返回数据

```json
{
  "title": "string",
  "url": "string",
  "author": "string",
  "description": "string",
  "date_release": "2022-05-08T15:01:58.992000",
  "amount": 0,
  "price": 0,
  "id": 1,
  "owner_id": 1
}
```

| 名称         | 类型    | 是否必须 | 默认值                                    | 备注       |
| ------------ | ------- | -------- | ----------------------------------------- | ---------- |
| title        | string  | 必须     |                                           | 标题       |
| url          | string  | 必须     | https://s1.ax1x.com/2022/05/07/OQuSc8.jpg | 图片url    |
| author       | string  | 必须     |                                           | 作者       |
| description  | string  | 必须     |                                           | 描述       |
| date_release | string  | 必须     |                                           | 发布日期   |
| amount       | integer | 必须     |                                           | 发售总量   |
| price        | integer | 必须     |                                           | 发售价     |
| owner_id     | integer | 必须     |                                           | 卡片拥有者 |

#### 3.2.2 获取发售日历卡片信息

> 基本信息

* **Path：**/cards/aftertwodays/
* **Method：**GET

> 请求参数

Header

| 参数名称     | 参数值           | 是否必须 | 示例 | 备注 |
| :----------- | ---------------- | -------- | ---- | ---- |
| Content-Type | application/json | 是       |      |      |

Body

> 返回数据

<details>
  <summary>点击查看详细内容</summary>
  <pre><code>
 {
  "today_release": [
    {
      "title": "string",
      "url": "string",
      "author": "string",
      "description": "string",
      "date_release": "2022-05-10T08:00:05.384000",
      "amount": 0,
      "price": 0,
      "id": 1,
      "owner_id": 1
    },
    {
      "title": "string",
      "url": "string",
      "author": "string",
      "description": "string",
      "date_release": "2022-05-10T08:00:05.384000",
      "amount": 0,
      "price": 0,
      "id": 2,
      "owner_id": 1
    },
    {
      "title": "string",
      "url": "string",
      "author": "string",
      "description": "string",
      "date_release": "2022-05-10T10:00:05.384000",
      "amount": 0,
      "price": 0,
      "id": 3,
      "owner_id": 1
    },
    {
      "title": "string",
      "url": "string",
      "author": "string",
      "description": "string",
      "date_release": "2022-05-10T10:00:05.384000",
      "amount": 0,
      "price": 0,
      "id": 4,
      "owner_id": 1
    }
  ],
  "released_cards": [
    {
      "title": "string",
      "url": "string",
      "author": "string",
      "description": "string",
      "date_release": "2022-05-08T01:05:57.502000",
      "amount": 0,
      "price": 0,
      "id": 9,
      "owner_id": 1
    },
    {
      "title": "string",
      "url": "string",
      "author": "string",
      "description": "string",
      "date_release": "2022-05-08T01:05:57.502000",
      "amount": 0,
      "price": 0,
      "id": 10,
      "owner_id": 1
    },
    {
      "title": "string",
      "url": "string",
      "author": "string",
      "description": "string",
      "date_release": "2022-05-08T01:05:57.502000",
      "amount": 0,
      "price": 0,
      "id": 11,
      "owner_id": 1
    }
  ]
}
  </code></pre>
</details>

| 名称        | 类型       | 是否必须 | 默认值 | 备注             |
| ----------- | ---------- | -------- | ------ | ---------------- |
| after_one8  | List[Card] | 必须     |        | 明天8点场的预售  |
| after_one12 | List[Card] | 必须     |        | 明天12点场的预售 |
| after_two8  | List[Card] | 必须     |        | 后天8点场的预售  |
| after_two12 | List[Card] | 必须     |        | 后天12点场的预售 |

#### 3.2.3 获取首页数字藏品数据

> 基本信息

* **Path：**/cards/nfts/
* **Method：**GET

> 请求参数

Header

| 参数名称     | 参数值           | 是否必须 | 示例 | 备注 |
| :----------- | ---------------- | -------- | ---- | ---- |
| Content-Type | application/json | 是       |      |      |

Body

> 返回数据

<details>
  <summary>点击查看详细内容</summary>
  <pre><code>
  {
  "after_one8": [
    {
      "title": "string",
      "url": "string",
      "author": "string",
      "description": "string",
      "date_release": "2022-05-10T08:00:05.384000",
      "amount": 0,
      "price": 0,
      "id": 1,
      "owner_id": 1
    },
    {
      "title": "string",
      "url": "string",
      "author": "string",
      "description": "string",
      "date_release": "2022-05-10T08:00:05.384000",
      "amount": 0,
      "price": 0,
      "id": 2,
      "owner_id": 1
    }
  ],
  "after_one12": [
    {
      "title": "string",
      "url": "string",
      "author": "string",
      "description": "string",
      "date_release": "2022-05-10T10:00:05.384000",
      "amount": 0,
      "price": 0,
      "id": 3,
      "owner_id": 1
    },
    {
      "title": "string",
      "url": "string",
      "author": "string",
      "description": "string",
      "date_release": "2022-05-10T10:00:05.384000",
      "amount": 0,
      "price": 0,
      "id": 4,
      "owner_id": 1
    }
  ],
  "after_two8": [
    {
      "title": "string",
      "url": "string",
      "author": "string",
      "description": "string",
      "date_release": "2022-05-11T08:00:05.384000",
      "amount": 0,
      "price": 0,
      "id": 5,
      "owner_id": 1
    },
    {
      "title": "string",
      "url": "string",
      "author": "string",
      "description": "string",
      "date_release": "2022-05-11T08:00:05.384000",
      "amount": 0,
      "price": 0,
      "id": 6,
      "owner_id": 1
    }
  ],
  "after_two12": [
    {
      "title": "string",
      "url": "string",
      "author": "string",
      "description": "string",
      "date_release": "2022-05-11T10:00:05.384000",
      "amount": 0,
      "price": 0,
      "id": 7,
      "owner_id": 1
    },
    {
      "title": "string",
      "url": "string",
      "author": "string",
      "description": "string",
      "date_release": "2022-05-11T10:00:05.384000",
      "amount": 0,
      "price": 0,
      "id": 8,
      "owner_id": 1
    }
  ]
}
  </code></pre>
</details>

| 名称           | 类型       | 是否必须 | 默认值 | 备注               |
| -------------- | ---------- | -------- | ------ | ------------------ |
| today_release  | List[Card] | 必须     |        | 今天正在发售的卡片 |
| released_cards | List[Card] | 必须     |        | 已经发售的卡片     |

#### 3.2.4 获取用户所拥有的卡片

> 基本信息

* **Path：**/api/my-cards
* **Method：**GET

> 请求参数

Header

| 参数名称      | 参数值 | 是否必须 | 示例                                                         | 备注                |
| :------------ | ------ | -------- | ------------------------------------------------------------ | ------------------- |
| Authorization |        | 是       | Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU | 用户令牌token，必传 |

Body

> 返回数据

<details>
  <summary>点击查看详细内容</summary>
  <pre><code>
[
  {
    "title": "string",
    "url": "string",
    "author": "string",
    "description": "string",
    "date_release": "2022-05-10T12:43:04.333000",
    "amount": 0,
    "price": 0,
    "id": 7,
    "owner_id": 2
  }
]
  </code></pre>
</details>


| 名称 | 类型       | 是否必须 | 默认值 | 备注                 |
| ---- | ---------- | -------- | ------ | -------------------- |
| List | List[Card] | 必须     |        | 返回所拥有的卡片数组 |

> 返回状态码

- 401 用户未认证
- **201 OK**

---

### 3.3 作者相关接口

#### 3.3.1 读取作者及作者文章

> 基本信息

* **Path：**/authors/
* **Method：**GET

> 请求参数

Header

|      |      |      |      |      |
| :--- | ---- | ---- | ---- | ---- |
|      |      |      |      |      |

Body

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| ---- | ---- | -------- | ------ | ---- | -------- |
|      |      |          |        |      |          |

> 返回数据

```json
[
  {
    "email": "string",
    "name": "string",
    "avatar": "string",
    "id": 1,
    "posts": [
      {
        "title": "string",
        "content": "string",
        "id": 1,
        "owner_id": 1,
        "date_created": "2022-05-12T09:16:03.925720",
        "date_last_updated": "2022-05-12T09:16:03.925720"
      }
    ]
  }
]
```

| 名称   | 类型       | 是否必须 | 默认值                                    | 备注         | 其他信息 |
| ------ | ---------- | -------- | ----------------------------------------- | ------------ | -------- |
| email  | string     | 必须     |                                           | 作者邮箱     |          |
| name   | string     | 必须     |                                           | 作者昵称     |          |
| avatar | string     | 必须     | https://s1.ax1x.com/2022/05/07/OQeNjg.png | 作者头像     |          |
| posts  | List[Post] | 必须     |                                           | 作者文章数组 |          |



----

### 3.4 文章相关接口

#### 3.4.1 新增文章

> 基本信息

* **Path：**/authors/{authod_id}/posts/
* **Method：**POST

> 请求参数

Header

|      |      |      |      |      |
| :--- | ---- | ---- | ---- | ---- |
|      |      |      |      |      |

Body

| 名称    | 类型   | 是否必须 | 默认值 | 备注     | 其他信息 |
| ------- | ------ | -------- | ------ | -------- | -------- |
| title   | string | 必须     |        | 文章标题 |          |
| content | string | 必须     |        | 文章内容 |          |

> 返回数据

```json
{
  "title": "string",
  "content": "string",
  "id": 2,
  "owner_id": 1,
  "date_created": "2022-05-12T09:20:55.480939",
  "date_last_updated": "2022-05-12T09:20:55.480939"
}
```

| 名称              | 类型     | 是否必须 | 默认值     | 备注             | 其他信息 |
| ----------------- | -------- | -------- | ---------- | ---------------- | -------- |
| title             | string   | 必须     |            | 文章标题         |          |
| content           | string   | 必须     |            | 文章内容         |          |
| id                | int      | 必须     |            | 文章id           |          |
| owner_id          | int      | 必须     | 文章作者id |                  |          |
| date_created      | datetime | 必须     |            | 文章创建时间     |          |
| date_last_updated | datetime | 必须     |            | 文章最新修改时间 |          |
