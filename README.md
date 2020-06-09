# comp7270-project-sails-app-singsing215
comp7270-project-sails-app-singsing215 created by GitHub Classroom

The rental website uses Node.js, Sails.js, AJAX and RESTful API technology to implement CRUD of the rental information, the user's rental operation, and the permission control of the administrator and the user. Sails is an MVC framework built on Node and using Express to process HTTP requests. The ORM layer (Waterline.js) in Sails handles all database operations for the house rental system.

Author: GUO Fusheng 19413238

System admins: { username: "admin", password: 123456 }

Clients: { username: "kenny", password: 123456 }

# IMPORTANT NOTE
After installing node modules from package.json, you need to delete '.columnName' from 
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
sails lift --models.migrate='drop'
```
