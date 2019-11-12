/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    login: async function (req, res) {

        if (!req.session.username) {
            var visitor = "123";
            req.session.username = visitor;
            req.session.abc = visitor;
        }

        if (req.method == "GET") return res.view('user/login');
        if (!req.body.username || !req.body.password) return res.badRequest();
        var user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(401).send("User not found");
        const match = await sails.bcrypt.compare(req.body.password, user.password);
        if (!match) return res.status(401).send("Wrong Password");
        req.session.regenerate(function (err) {
            if (err) return res.serverError(err);
            req.session.username = req.body.username;
            sails.log("[Session] ", req.session);
            return res.ok("Login successfully.");
        });

    },


    logout: async function (req, res) {

        req.session.destroy(function (err) {
            if (err) return res.serverError(err);
            return res.ok("Log out successfully.");
        });
    },

    populate: async function (req, res) {

        var model = await User.findOne(req.params.id).populate("renting");

        if (!model) return res.notFound();

        return res.json(model);

    },



    add: async function (req, res) {

        if (!await User.findOne(req.params.id)) return res.notFound();

        const thatRent = await Rent.findOne(req.params.fk).populate("rentby", { id: req.params.id });

        if (!thatRent) return res.notFound();

        if (thatRent.rentby.length)
            return res.status(409).send("Already rent.");   // conflict

        await User.addToCollection(req.params.id, "renting").members(req.params.fk);

        return res.ok('Operation completed.');

    },


    remove: async function (req, res) {

        if (!await User.findOne(req.params.id)) return res.notFound();

        const thatRent = await Rent.findOne(req.params.fk).populate("rentby", { id: req.params.id });

        if (!thatRent) return res.notFound();

        if (!thatRent.rentby.length)
            return res.status(409).send("Nothing to delete.");    // conflict

        await User.removeFromCollection(req.params.id, "renting").members(req.params.fk);

        return res.ok('Operation completed.');

    },

};

