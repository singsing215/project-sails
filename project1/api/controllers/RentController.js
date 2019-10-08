/**
 * RentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
// action - create
create: async function (req, res) {

    if (req.method == "GET")
        return res.view('rent/create');

    if (!req.body.Rent)
        return res.badRequest("Form-data not received.");

    await Rent.create(req.body.Rent);

    return res.ok("Successfully created!");
},

// json function
json: async function (req, res) {

    var rents = await Rent.find();

    return res.json(rents);
},

// action - index
index: async function (req, res) {

    var models = await Rent.find();
    return res.view('rent/index', { rents: models });
    
},

    // action - view
    view: async function (req, res) {

        var model = await Rent.findOne(req.params.id);

        if (!model) return res.notFound();

        return res.view('rent/view', { rent: model });

    },

};

