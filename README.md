# comp7270-project-react-sails-singsing215
comp7270-project-react-sails-singsing215 created by GitHub Classroom

The overall design of the system interface is simple and elegant. It uses the Bootstrap CSS framework and adopts a responsive web design. It will hide unnecessary components according to the user identity. The back end of the rental system uses Sails built on Node and uses the ejs template engine. The ORM layer (Waterline.js) in Sails handles all database operations for the housing rental system. The rental system uses AJAX and RESTful API technologies, and implement CRUD of rental information as well as effective rental operations for users, and permission control for visitor, user and administrator.

Author: GUO Fusheng 19413238

System admins: { username: "admin", password: 123456 }

Clients: { username: "kenny", password: 123456 }

# IMPORTANT NOTE
Install dependencies with `npm install`

Install Sails with `npm install sails -g`

Since the project involves modifying the node_modules code in the node.js project, the following error will occur during the first run.
```
Cannot read property 'columnName' of undefined
```

After installing node modules from package.json in sails-app, you need to delete '.columnName' from 
```
\node_modules\waterline\lib\waterline\utils\query\forge-stage-three-query.js:591:49
```

The modified code in line 591 in forge-stage-three-query.js should be
```js
var columnName = model.schema[attrName];
```

After modification, run the following code to start 
```
sails lift --models.migrate='drop'
```

# serve with hot reload at localhost:1337

## 项目描述
1、房屋租赁系统的后端使用建立于Node上的MVC框架Sails。

2、系统所有的数据库操作由Sails的ORM层(Waterline.js)处理。

3、租赁系统实现租借信息的CRUD，用户有效的租赁操作，以及管理员和用户的权限控制。

4、使用大量async function进行前后端交互，其中用到AJAX，JSON和RESTful API技术。

## 项目优化
1、使用Secure和HttpOnly 属性，提升cookie安全性。

2、使用RESTful API预防CSRF攻击。

3、活用AJAX，在不重新加载当前页面的情况下请求数据。

4、使用含有url的json优化登录后的重定向。

5、使用对象关系映射，性能佳，利于重用代码。

6、使用Embedded JavaScript，优化NODE环境下数据绑定及页面渲染。
