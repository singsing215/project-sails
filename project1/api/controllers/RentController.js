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


// action - delete 
delete: async function (req, res) {

    if (req.method == "GET") return res.forbidden();

    var models = await Rent.destroy(req.params.id).fetch();

    if (models.length == 0) return res.notFound();

    return res.ok("Rent Deleted.");

},

// action - update
update: async function (req, res) {

    if (req.method == "GET") {

        var model = await Rent.findOne(req.params.id);

        if (!model) return res.notFound();

        return res.view('rent/update', { rent: model });

    } else {

        if (!req.body.Rent)
            return res.badRequest("Form-data not received.");

        var models = await Rent.update(req.params.id).set({
            title: req.body.Rent.title,
            url: req.body.Rent.url,
            bedroom: req.body.Rent.bedroom,
            area: req.body.Rent.area,
            tenant: req.body.Rent.tenant,
            rent: req.body.Rent.rent

        }).fetch();

        if (models.length == 0) return res.notFound();

        return res.ok("Record updated");

    }

};

