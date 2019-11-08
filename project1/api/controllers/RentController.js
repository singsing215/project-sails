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

        if (req.wantsJSON){
            if (req.method == "GET") return res.forbidden();
            var models = await Rent.destroy(req.params.id).fetch();
            if (models.length == 0) return res.notFound();

            return res.json({message: "Rental information deleted.", url: '/'});    // for ajax request

        } else {
            return res.redirect('/');           // for normal request
        }

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
                estate: req.body.Rent.estate,
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

        if(!req.session.username){
            var visitor = "123";
            req.session.username = visitor;
            req.session.abc = visitor;
            }

        const qPage = Math.max(req.query.page - 1, 0) || 0;
        const numOfItemsPerPage = 2;

        const qEstate = req.query.estate ;
        const qBedroom = parseInt(req.query.bedroom);
        const qmaxArea = parseInt(req.query.maxarea);
        const qminArea = parseInt(req.query.minarea);
        const qmaxRent = parseInt(req.query.maxrent);
        const qminRent = parseInt(req.query.minrent);
        // var w = {};
        // if (!isNaN(qBedroom)) w.Bedroom = qBedroom;
        if (isNaN(qmaxRent)) {

            var models = await Rent.find({
                limit: numOfItemsPerPage,
                skip: numOfItemsPerPage * qPage,

                where: { estate:qEstate },
                sort: 'estate'
            });
        } else {
            var models = await Rent.find({
                limit: numOfItemsPerPage,
                skip: numOfItemsPerPage * qPage,

                where: { estate: qEstate, bedroom: qBedroom, area: { '>=': qminArea, '<=': qmaxArea },  rent: { '>=': qminRent, '<=': qmaxRent  }},
                sort: 'estate'
            });
        }


        if (!models) return res.notFound();

        var numOfPage = Math.ceil(await Rent.count() / numOfItemsPerPage);

        return res.view('rent/paginate', { rents: models, count: numOfPage });

    },



    // action - home
    home: async function (req, res) {
        
        if(!req.session.username){
        var visitor = "123";
        req.session.username = visitor;
        req.session.abc = visitor;
        }

        const qPage = Math.max(req.query.page - 1, 0) || 0;
        const numOfItemsPerPage = 4;



        var models = await Rent.find({
            where: { property: "dummy" },
            sort: 'created',
            limit: numOfItemsPerPage,
            skip: numOfItemsPerPage * qPage
        });

        var numOfPage = Math.ceil(await Rent.count() / numOfItemsPerPage);

        return res.view('rent/home', { rents: models, count: numOfPage });
    },

    // action - adhome
    adhome: async function (req, res) {

        const qPage = Math.max(req.query.page - 1, 0) || 0;
        const numOfItemsPerPage = 4;



        var models = await Rent.find({
            where: { property: "dummy" },
            sort: 'created',
            limit: numOfItemsPerPage,
            skip: numOfItemsPerPage * qPage
        });

        var numOfPage = Math.ceil(await Rent.count() / numOfItemsPerPage);

        return res.view('rent/adhome', { rents: models, count: numOfPage });
    },

        // action - khome
        khome: async function (req, res) {

            const qPage = Math.max(req.query.page - 1, 0) || 0;
            const numOfItemsPerPage = 4;
    
    
    
            var models = await Rent.find({
                where: { property: "dummy" },
                sort: 'created',
                limit: numOfItemsPerPage,
                skip: numOfItemsPerPage * qPage
            });
    
            var numOfPage = Math.ceil(await Rent.count() / numOfItemsPerPage);
    
            return res.view('rent/khome', { rents: models, count: numOfPage });
        },

                // action - mhome
                mhome: async function (req, res) {

                    const qPage = Math.max(req.query.page - 1, 0) || 0;
                    const numOfItemsPerPage = 4;
            
            
            
                    var models = await Rent.find({
                        where: { property: "dummy" },
                        sort: 'created',
                        limit: numOfItemsPerPage,
                        skip: numOfItemsPerPage * qPage
                    });
            
                    var numOfPage = Math.ceil(await Rent.count() / numOfItemsPerPage);
            
                    return res.view('rent/mhome', { rents: models, count: numOfPage });
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


    // action - my 
    my: async function (req, res) {

        const qPage = Math.max(req.query.page - 1, 0) || 0;
        const numOfItemsPerPage = 4;



        var models = await Rent.find({
            where: { property: "dummy" },
            sort: 'created',
            limit: numOfItemsPerPage,
            skip: numOfItemsPerPage * qPage
        });

        var numOfPage = Math.ceil(await Rent.count() / numOfItemsPerPage);

        return res.view('rent/my', { rents: models, count: numOfPage });

    },


    // action -occupants
    occupants: async function (req, res) {

        const qPage = Math.max(req.query.page - 1, 0) || 0;
        const numOfItemsPerPage = 4;



        var models = await Rent.find({
            where: { property: "dummy" },
            sort: 'created',
            limit: numOfItemsPerPage,
            skip: numOfItemsPerPage * qPage
        });

        var numOfPage = Math.ceil(await Rent.count() / numOfItemsPerPage);

        return res.view('rent/my', { rents: models, count: numOfPage });

    },


    populate: async function (req, res) {

        var model = await Rent.findOne(req.params.id).populate("rentby");
    
        if (!model) return res.notFound();
    
        return res.json(model);
    
    },

};