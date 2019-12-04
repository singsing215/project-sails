/**
 * RentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    // action - create
    create: async function (req, res) {

        if (!req.session.username) {
            var visitor = "123";
            req.session.username = visitor;
            req.session.abc = visitor;
        }

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

        if (!req.session.username) {
            var visitor = "123";
            req.session.username = visitor;
            req.session.abc = visitor;
        }

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

        if (req.wantsJSON) {
            if (req.method == "GET") return res.forbidden();
            var models = await Rent.destroy(req.params.id).fetch();
            if (models.length == 0) return res.notFound();

            return res.json({ message: "Rental information deleted.", url: '/' });    // for ajax request

        } else {
            return res.redirect('/');           // for normal request
        }

    },

    // action - update
    update: async function (req, res) {

        if (!req.session.username) {
            var visitor = "123";
            req.session.username = visitor;
            req.session.abc = visitor;
        }

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
        if (!req.session.username) {
            var visitor = "123";
            req.session.username = visitor;
            req.session.abc = visitor;
        }
        const qPage = Math.max(req.query.page - 1, 0) || 0;
        const numOfItemsPerPage = 2;
        const qEstate = req.query.estate;
        const qBedroom = parseInt(req.query.bedroom);
        const qmaxArea = parseInt(req.query.maxarea);
        const qminArea = parseInt(req.query.minarea);
        const qmaxRent = parseInt(req.query.maxrent);
        const qminRent = parseInt(req.query.minrent);
        // var models = {};
        // if (!isNaN(qBedroom)) models.Bedroom = qBedroom;
        if (isNaN(qmaxArea)) {
            var models = await Rent.find({
                limit: numOfItemsPerPage,
                skip: numOfItemsPerPage * qPage,
                where: { estate: qEstate },
                sort: 'estate'
            });
        } else if(!isNaN(qmaxArea)){
            var models = await Rent.find({
                limit: numOfItemsPerPage,
                skip: numOfItemsPerPage * qPage,
                where: { area: {'<=': qmaxArea } },
                sort: 'estate'
            });
        } else {
            var models = await Rent.find({
                limit: numOfItemsPerPage,
                skip: numOfItemsPerPage * qPage,

                where: { estate: qEstate, area: {'<=': qmaxArea } },
                sort: 'estate'
            });
        }
        if (!models) return res.notFound();
        var numOfPage = Math.ceil(await Rent.count() / numOfItemsPerPage);
        return res.view('rent/paginate', { rents: models, count: numOfPage });
    },

    jestate: async function (req, res) {
        var rents = await Rent.find();
        return res.json(rents);
    },
    // json - to search max bedroom
    jpaginate: async function (req, res) {
        const qEstate = req.query.estate;
        const qmaxBedroom = parseInt(req.query.maxbedroom);
        const qmaxArea = parseInt(req.query.maxarea);
        const qminArea = parseInt(req.query.minarea);
        const qmaxRent = parseInt(req.query.maxrent);
        const qminRent = parseInt(req.query.minrent);
        if (isNaN(qmaxArea)) {
            var models = await Rent.find({
                where: { estate: qEstate },
                sort: 'estate'
            });
        } else if(!isNaN(qmaxArea)){
            var models = await Rent.find({
                where: { bedroom: {'<=': qmaxArea } },
                sort: 'estate'
            });
        } else {
            var models = await Rent.find({
                where: { estate: qEstate, bedroom: {'<=': qmaxArea } },
                sort: 'estate'
            });
        }
        if (!models) return res.notFound();
        return res.json(models);
    },

        // json - to search min bedroom
        jjpaginate: async function (req, res) {
            const qEstate = req.query.estate;
            const qmaxBedroom = parseInt(req.query.maxbedroom);
            const qmaxArea = parseInt(req.query.maxarea);
            const qminArea = parseInt(req.query.minarea);
            const qmaxRent = parseInt(req.query.maxrent);
            const qminRent = parseInt(req.query.minrent);
            if (isNaN(qmaxArea)) {
                var models = await Rent.find({
                    where: { estate: qEstate },
                    sort: 'estate'
                });
            } else if(!isNaN(qmaxArea)){
                var models = await Rent.find({
                    where: { bedroom: {'>=': qmaxArea } },
                    sort: 'estate'
                });
            } else {
                var models = await Rent.find({
                    where: { estate: qEstate, bedroom: {'>=': qmaxArea } },
                    sort: 'estate'
                });
            }
            if (!models) return res.notFound();
            return res.json(models);
        },

    // action - home
    home: async function (req, res) {

        if (!req.session.username) {
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
        sails.log("[Session] ", req.session);
        sails.log("[body] ", req.body);
        return res.view('rent/home', { rents: models, count: numOfPage });
    },

    // action - home
    jhome: async function (req, res) {
        if (!req.session.username) {
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
        return res.json(models);
    },



    // action - details
    details: async function (req, res) {
        if (!req.session.username) {
            var visitor = "123";
            req.session.username = visitor;
            req.session.abc = visitor;
        }
        if (req.session.username == 'kenny') {
            var thatRent = await Rent.findOne(req.params.id).populate("rentby");
            const thatRentby = await Rent.findOne(req.params.id).populate("rentby", { id: req.session.userId });
        if (thatRentby.rentby.length == 0) {
            req.session.message = "corent";
        }
        if (thatRentby.rentby.length >= 1) {
            req.session.message = "moveout";
        }
        if (thatRent.rentby.length >= Rent.tenant){
            req.session.message = "full";
        }
    }
        if (req.method == "GET") {
            // var model = await Rent.findOne(req.params.id);
            // if (!model) return res.notFound();
            // return res.view('rent/details', { rent: model });

            var model = await Rent.findOne(req.params.id);
            if (!model) return res.notFound();
            var thatRent = await Rent.findOne(req.params.id).populate("rentby");
            if (!thatRent) return res.notFound();
            if (thatRent.rentby.length >= Rent.tenant){
            return res.view('rent/details', { rent: model, message: "full" });
        }
            const thatRentby = await Rent.findOne(req.params.id).populate("rentby", { id: req.session.userId });//req.session.userId
            if (thatRentby.rentby.length >= 1) {
            return res.view('rent/details', { rent: model, message: "moveout" });
        }
            if (thatRentby.rentby.length == 0){
                return res.view('rent/details', { rent: model, message: "corent" });
            } 
            sails.log("[Session] ", req.session);
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
        }

    },

    // detail: async function (req, res) {
    //     if (!req.session.username) {
    //         var visitor = "123";
    //         req.session.username = visitor;
    //         req.session.abc = visitor;
    //     }
    //     if (!req.session.message) {
    //         var msg = "corent";
    //         req.session.message = msg;
    //     }

    //     var model = await Rent.findOne(req.params.id);
    //     if (!model) return res.notFound();
    //     var thatRent = await Rent.findOne(req.params.id).populate("rentby");
    //     if (!thatRent) return res.notFound();
    //     const thatRentby = await Rent.findOne(req.params.id).populate("rentby", { id: "2" });
    //     if (thatRentby.rentby.length)
    //         return res.view('rent/details', { rent: model, message: "moveout" });
    //     if (thatRent.rentby.length >= Rent.tenant) { return res.view('rent/details', { rent: model, message: "full" }); }
    //     return res.view('rent/details', { rent: model, message: "corent" });


        // var thatRent = await rent.findOne(req.params.fk).populate("rentby");
        // const thatUser = await User.findOne(req.params.id).populate("renting", {id: req.rent.id});
        // const thatRent = await Rent.findOne(req.params.id).populate("rentby", {username: req.session.username});
        // if (thatRent.rentby.length){return res.view('rent/details', {model:rent, message:"moveout"});}
        // if (thatRent.rentby.length >= rent.tenant){return res.view('rent/details', {model:rent, message:"full"});}
        // if (!thatRent.rentby.length){return res.view('rent/details', {model:rent, message:"corent"});}

    // },


    // action - my 
    // my: async function (req, res) {

    //     const qPage = Math.max(req.query.page - 1, 0) || 0;
    //     const numOfItemsPerPage = 4;



    //     var models = await Rent.find({
    //         where: { property: "dummy" },
    //         sort: 'created',
    //         limit: numOfItemsPerPage,
    //         skip: numOfItemsPerPage * qPage
    //     });

    //     var numOfPage = Math.ceil(await Rent.count() / numOfItemsPerPage);

    //     return res.view('rent/my', { rents: models, count: numOfPage });

    // },


    // action -occupants
    // occupants: async function (req, res) {

    //     const qPage = Math.max(req.query.page - 1, 0) || 0;
    //     const numOfItemsPerPage = 4;



    //     var models = await Rent.find({
    //         where: { property: "dummy" },
    //         sort: 'created',
    //         limit: numOfItemsPerPage,
    //         skip: numOfItemsPerPage * qPage
    //     });

    //     var numOfPage = Math.ceil(await Rent.count() / numOfItemsPerPage);

    //     return res.view('rent/my', { rents: models, count: numOfPage });

    // },


    populate: async function (req, res) {

        var model = await Rent.findOne(req.params.id).populate("rentby");

        if (!model) return res.notFound();

        return res.json(model);

    },

};