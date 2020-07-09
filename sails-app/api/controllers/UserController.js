/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    login: async function(req, res) {
        sails.log("[body] ", req.body);
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
        req.session.regenerate(function(err) {
            if (err) return res.serverError(err);
            req.session.username = req.body.username;
            req.session.uid = "2";
            sails.log("[Session] ", req.session);
            sails.log("[body] ", req.body);
            return res.json({ message: "Login successfully.", url: 'http://localhost:1337/' });
        });
    },

    jlogin: async function(req, res) {
        sails.log("[body] ", req.body);
        if (req.method == "GET") return res.view('user/login');
        if (!req.body.username || !req.body.password) return res.badRequest();
        var user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(401).json({ message: "User not found", url: '/' });
        const match = await sails.bcrypt.compare(req.body.password, user.password);
        if (!match) return res.status(401).json({ message: "Wrong Password", url: '/' });
        req.session.regenerate(function(err) {
            if (err) return res.serverError(err);
            req.session.username = req.body.username;
            req.session.uid = "2";
            sails.log("[Session] ", req.session);
            sails.log("[body] ", req.body);
            return res.json({ message: "Login successfully.", url: '/' });
        });
        sails.log("[Session] ", req.session);
    },


    logout: async function(req, res) {
        req.session.destroy(function(err) {
            if (err) return res.serverError(err);
            return res.redirect("/");
        });
    },

    jlogout: async function(req, res) {
        req.session.destroy(function(err) {
            if (err) return res.serverError(err);
            return res.json({ message: "Logout successfully.", url: '/' });
        });
        sails.log("[body] ", req.body);
        sails.log("[Session] ", req.session);
    },

    populate: async function(req, res) {
        var model = await User.findOne(req.params.id).populate("renting");
        if (!model) return res.notFound();
        return res.json(model);
    },


    add: async function(req, res) {
        if (req.wantsJSON) {
            if (!await User.findOne(req.params.id)) return res.notFound();
            const thatRent = await Rent.findOne(req.params.fk).populate("rentby", { id: req.params.id });
            if (!thatRent) return res.notFound();
            if (thatRent.rentby.length)
                return res.json({ message: "Already rent.", url: '/' });
            if (thatRent.rentby.length >= Rent.tenant) //Make sure there’s enough room (tenants) from the properties.
                return res.json({ message: 'Already full.', url: '/' });
            await User.addToCollection(req.params.id, "renting").members(req.params.fk);
            sails.log("[Session] ", req.session);
            return res.json({ message: 'Move-in succssfully.', url: '/' });
        } else {
            return res.redirect('/');            // for normal request
        }
    },

    remove: async function(req, res) {
        if (req.wantsJSON) {
            if (!await User.findOne(req.params.id)) return res.notFound();
            const thatRent = await Rent.findOne(req.params.fk).populate("rentby", { id: req.params.id });
            if (!thatRent) return res.notFound();
            if (!thatRent.rentby.length)
                return res.json({ message: "Nothing to delete.", url: '/' });
            await User.removeFromCollection(req.params.id, "renting").members(req.params.fk);
            return res.json({ message: 'Operation completed.', url: '/' });
        } else {
            return res.redirect('/');            // for normal request
        }
    }

};