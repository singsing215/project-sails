/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/


  '/': { view: 'rent/home' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
 'GET /rent/create' : 'RentController.create',
 'POST /rent/create' : 'RentController.create',


 'GET /rent/json' : 'RentController.json',
 'GET /rent/index' : 'RentController.index',
'GET /rent/view/:id': 'RentController.view',
// 'GET /rent/delete/:id': 'RentController.delete',
// 'POST /rent/delete/:id': 'RentController.delete',
'DELETE /rent/:id': 'RentController.delete',
'GET /rent/update/:id': 'RentController.update',
'POST /rent/update/:id': 'RentController.update',

'GET /rent/paginate': 'RentController.paginate',
'POST /rent/paginate': 'RentController.paginate',

// 'GET /rent/my' : 'RentController.my',
// 'POST /rent/my' : 'RentController.my',

// 'GET /rent/occupants' : 'RentController.occupants',
// 'POST /rent/occupants' : 'RentController.occupants',


'GET /rent/details/:id': 'RentController.details',

'/' : 'RentController.home',

'GET /rent/home': 'RentController.home',

'GET /user/login': 'UserController.login',
'POST /user/login': 'UserController.login',
'POST /user/logout': 'UserController.logout',

// 'GET /user/add': 'UserController.add',
'POST /user/add': 'UserController.add',

'GET /rent/:id/rentby': 'RentController.populate',
'GET /user/:id/renting': 'UserController.populate',
'POST /user/:id/renting/add/:fk': 'UserController.add',
'GET /user/:id/renting/add/:fk': 'UserController.add',
// 'GET /user/:id/renting/remove/:fk': 'UserController.remove',
'POST /user/:id/renting/remove/:fk': 'UserController.remove',
};
