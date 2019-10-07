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

};

