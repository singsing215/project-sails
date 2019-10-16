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
 'GET /search/create' : 'SearchController.create',
 'POST /search/create' : 'SearchController.create',
 'GET /rent/json' : 'RentController.json',
 'GET /rent/index' : 'RentController.index',
'GET /rent/view/:id': 'RentController.view',
'GET /rent/delete/:id': 'RentController.delete',
'POST /rent/delete/:id': 'RentController.delete',
'GET /rent/update/:id': 'RentController.update',
'POST /rent/update/:id': 'RentController.update',

'GET /rent/paginate': 'RentController.paginate',
'POST /rent/paginate': 'RentController.paginate',
'GET /rent/search': 'RentController.search',
'POST /rent/search': 'RentController.search',


'GET /rent/details/:id': 'RentController.details',
'/' : 'RentController.home',

'GET /rent/home': 'RentController.home',
};
