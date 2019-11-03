/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  sails.bcrypt = require('bcryptjs');
  const saltRounds = 10;

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```


if (await Rent.count() == 0) {

  await Rent.createEach([
    {id:1, title: "半山自住品味靚裝-三房兩廁-中高層開揚景觀", estate:"Robinson Heights", url: "https://i1.28hse.com/2019/09/938689_2019094721.jpg", bedroom:3, area:899, tenant:5, rent:43000, property:"dummy"},
    {id:2, title: "銅鑼灣2房2廳。即租即住。優質罕盤。", estate:"Hoi deen Court", url:"https://i1.28hse.com/2019/10/951089_2019104698.jpg", bedroom:2, area:700, tenant:3, rent:26500, property:"dummy" },
    {id:3, title: "形品星寓。3分鐘到地鐵站", estate:"Lime Stardom", url:"https://i1.28hse.com/2019/09/930790_2019095031.jpg", bedroom:1, area:390, tenant:2, rent:19000, property:"dummy" },
    {id:4, title: "中上環服務式住宅 2分鐘到地鐵", estate:"AKVO Hotel", url:" https://i1.28hse.com/2019/10/955789_2019101877.jpg", bedroom:1, area:605, tenant:2, rent:35000, property:"dummy" }
  ]);

}


const hash = await sails.bcrypt.hash('123456', saltRounds);

await User.createEach([
    { username: "admin", password: hash },
    { username: "martin", password: hash,id:1 },
    { username: "kenny", password: hash,id:2 }
    // etc.
]);


const martin = await User.findOne({username: "martin"});
const kenny = await User.findOne({username: "kenny"});
const admin = await User.findOne({username: "admin"});

const r1 = await Rent.findOne({id:1});

await User.addToCollection(martin.id, 'renting').members(r1.id);





};
