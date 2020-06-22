# comp7270-project-react-sails-singsing215
comp7270-project-react-sails-singsing215 created by GitHub Classroom

The front end of the rental system uses React and Vue. The overall design of the system interface is simple and elegant. It uses the Bootstrap CSS framework and adopts a responsive web design. It will hide unnecessary components according to the user identity. The back end of the rental system uses Sails built on Node and uses the ejs template engine. The ORM layer (Waterline.js) in Sails handles all database operations for the housing rental system. The rental system uses AJAX and RESTful API technologies, and implement CRUD of rental information as well as effective rental operations for users, and permission control for visitor, user and administrator.

Author: GUO Fusheng 19413238

System admins: { username: "admin", password: 123456 }

Clients: { username: "kenny", password: 123456 }

# IMPORTANT NOTE
After installing node modules from package.json in sails-app, you need to delete '.columnName' from 
```
project-sails\project1\node_modules\waterline\lib\waterline\utils\query\forge-stage-three-query.js:591:49
```

Otherwise, you will see the error that 
```
Cannot read property 'columnName' of undefined
```

The modified code in line 591 should be
```js
var columnName = model.schema[attrName];
```

After modification, run the following code to start 
```
npm start
```
```
sails lift --models.migrate='drop'
```
