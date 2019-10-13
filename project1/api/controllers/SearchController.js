/**
 * SearchController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
// action - create
create: async function (req, res) {

    if (req.method == "GET")
        return res.view('Search/create');
        var searchs = await search.find();
        var smod = await search.findOne(req.params.id);


    await Search.create(req.body.Search);


},


 


};

