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

        if (!req.body.Rent) return res.badRequest("Form-data not received.");

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
    },

    // search function
search: async function (req, res) {

    const qTitle = req.query.title || "";
    const qUrl = String(req.query.url);
    const qBedroom = parseInt(req.query.bedroom);
    const qArea = parseInt(req.query.area);
    const qTenant = parseInt(req.query.tenant);
    const qRent = parseInt(req.query.rent);

    if (isNaN(qUrl)) {

        var models = await Rent.find({
            where: { name: { contains: qTitle } },
            sort: 'title'
        });

    } else {

        var models = await Rent.find({
            where: { name: { contains: qTitle }, url: qUrl },
            sort: 'title'
        });

    }

    if (isNaN(qBedroom)) {

        var models = await Rent.find({
            where: { name: { contains: qTitle } },
            sort: 'title'
        });

    } else {

        var models = await Rent.find({
            where: { name: { contains: qTitle }, bedroom: qBedroom },
            sort: 'title'
        });

    }

    if (isNaN(qArea)) {

        var models = await Rent.find({
            where: { name: { contains: qTitle } },
            sort: 'title'
        });

    } else {

        var models = await Rent.find({
            where: { name: { contains: qTitle }, area: qArea },
            sort: 'title'
        });

    }

    if (isNaN(qTenant)) {

        var models = await Rent.find({
            where: { name: { contains: qTitle } },
            sort: 'title'
        });

    } else {

        var models = await Rent.find({
            where: { name: { contains: qTitle }, tenant: qTenant },
            sort: 'title'
        });

    }

    if (isNaN(qRent)) {

        var models = await Rent.find({
            where: { name: { contains: qTitle } },
            sort: 'title'
        });

    } else {

        var models = await Rent.find({
            where: { name: { contains: qTitle }, rent: qRent },
            sort: 'title'
        });

    }

    return res.view('rent/index', { rents: models });
},

 // action - paginate
paginate: async function (req, res) {

    const qPage = Math.max(req.query.page - 1, 0) || 0;

    const numOfItemsPerPage = 2;

    var models = await Rent.find({
        limit: numOfItemsPerPage, 
        skip: numOfItemsPerPage * qPage
    });

    var numOfPage = Math.ceil(await Rent.count() / numOfItemsPerPage);

    return res.view('rent/paginate', { rents: models, count: numOfPage });
},
   

};

