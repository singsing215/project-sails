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
            estate:req.body.Rent.estate,
            url: req.body.Rent.url,
            bedroom: req.body.Rent.bedroom,
            area: req.body.Rent.area,
            tenant: req.body.Rent.tenant,
            rent: req.body.Rent.rent,
            created: req.body.Rent.created,
            updated: req.body.Rent.updated


        }).fetch();

        if (models.length == 0) return res.notFound();

        return res.ok("Record updated");
    }
    },

 

 // action - paginate + search
 paginate: async function (req, res) {
   // await search.create(req.body.search);
   // var searchs = await search.find();
  //  var smod = await search.findOne(req.params.id);
//  await Rent.create(req.body.Rent);

    const qPage = Math.max(req.query.page - 1, 0) || 0;
    const numOfItemsPerPage = 2;



    const qEstate = req.query.estate;
    const qBedroom = req.query.bedroom;
    const qArea = req.query.area;
    const qRent = req.query.rent;


    var models = await Rent.find({
        limit: numOfItemsPerPage, 
        skip: numOfItemsPerPage * qPage,
        where: { estate: qEstate, bedroom: qBedroom, area: qArea, rent: qRent},
        sort: 'estate'
    });

    if (!models) return res.notFound();

    var numOfPage = Math.ceil(await Rent.count() / numOfItemsPerPage);

    return res.view('rent/paginate', { rents: models, count: numOfPage });



},
   



 // action - home
 home: async function (req, res) {

    const qPage = Math.max(req.query.page - 1, 0) || 0;
    const numOfItemsPerPage = 4;



    var models = await Rent.find({
        where: {property:"dummy"},
        sort: 'created',
        limit: numOfItemsPerPage, 
        skip: numOfItemsPerPage * qPage
    });

    var numOfPage = Math.ceil(await Rent.count() / numOfItemsPerPage);

    return res.view('rent/home', { rents: models, count: numOfPage });
},



// action - details
details: async function (req, res) {

    if (req.method == "GET") {

        var model = await Rent.findOne(req.params.id);

        if (!model) return res.notFound();

        return res.view('rent/details', { rent: model });

    } else {

        if (!req.body.Rent) return res.badRequest("Form-data not received.");

        var models = await Rent.details(req.params.id).set({
            title: req.body.Rent.title,
            url: req.body.Rent.url,
            estate: req.body.Rent.estate,
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


        const qEstate = req.body.Rent.estate;
        const qBedroom = req.body.Rent.bedroom;
        const qArea = req.body.Rent.area;
        const qRent = req.body.Rent.rent;
    
        var models = await Rent.find({
            
            estate: req.body.Rent.estate,
            bedroom: req.body.Rent.bedroom,
            area: req.body.Rent.area,
            rent: req.body.Rent.rent,

            where: { estate: qEstate, bedroom: qBedroom, area: qArea, rent: qRent},
            sort: 'estate'
          });

          if (!models) return res.notFound();
    
        return res.view('rent/paginate', { rents: models });
    },
    



};


