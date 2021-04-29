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

module.exports.bootstrap = async function () {

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
    await Rent.createEach([{
        id: 1,
        title: "半山自住品味靚裝-三房兩廁",
        estate: "Robinson Heights",
        url: "https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4Tpksf/TmEUgtj9EK6.7V8ajmQrEIXUQJFn*EZ9xVQWM1mUsHpTHj39s2Qd.*jL3mgIcQqGRmM1kbk7Vw3OcVgQMQckS0798Q5tS9u.2E05.cMOpuM!/b&bo=uAIKArgCCgIBGT4!&rf=viewer_4",
        bedroom: 3,
        area: 899,
        tenant: 5,
        rent: 43000,
        property: "dummy",
        map: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.2794683&lng=114.1533675&zoom=17&markerLat=22.2794683&markerLng=114.1533675&markerTitle=Robinson%20Heights&locate=true"
      },
      {
        id: 2,
        title: "銅鑼灣2房2廳。優質罕盤。",
        estate: "Hoi deen Court",
        url: "https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4Tpksf/TmEUgtj9EK6.7V8ajmQrEA.s4duhsW9Osg6LzuCFaDonfsV4wrD35p7aUWeoRicTHMH0kZqHsvL4bakYQWvYZfz5sXsi1hlZUQaeF7G.HsI!/b&bo=uAIKArgCCgIBGT4!&rf=viewer_4",
        bedroom: 2,
        area: 700,
        tenant: 3,
        rent: 26500,
        property: "dummy",
        map: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.2818462&lng=114.1836251&zoom=17&markerLat=22.2818462&markerLng=114.1836251&markerTitle=Hoi%20deen%20Court&locate=true"
      },
      {
        id: 3,
        title: "形品星寓。3分鐘到地鐵站",
        estate: "Lime Stardom",
        url: "https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4Tpksf/TmEUgtj9EK6.7V8ajmQrEBbq7ok7W9ohLlplZQ04NPQ.gIahHoO4NB01n6pakYP69odi5q6hFJAx158MMwLtoxn.02xXGWR8*4au1UwJ1Y4!/b&bo=uAIKArgCCgIBGT4!&rf=viewer_4",
        bedroom: 1,
        area: 390,
        tenant: 2,
        rent: 19000,
        property: "dummy",
        map: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.3212966&lng=114.16478&zoom=17&markerLat=22.3212966&markerLng=114.16478&markerTitle=Lime%20Stardom&locate=true"
      },
      {
        id: 4,
        title: "中上環服務式住宅 2分鐘到地鐵",
        estate: "AKVO Hotel",
        url: " https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4Tpksf/TmEUgtj9EK6.7V8ajmQrEGZ7Z.9IDvKWJrkFsdWVCaxLntoAWi7DmGVFNFFuOJTznStYyqmDmAN4QjJD3IsjGZ.QLcDrE7iPBszvYKKaCF8!/b&bo=uAIKArgCCgIBGT4!&rf=viewer_4",
        bedroom: 1,
        area: 605,
        tenant: 2,
        rent: 35000,
        property: "dummy",
        map: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.2849974&lng=114.1513049&zoom=17&markerLat=22.2849974&markerLng=114.1513049&markerTitle=AKVO%20Hotel&locate=true"
      },
      {
        id: 5,
        title: "極近地鐵！全包家私！3人房間",
        estate: "Robinson Heights",
        url: "https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4Tpksf/TmEUgtj9EK6.7V8ajmQrEPoKKuVjAi5.Ps1778H.SeNFr1dM1AmvUFxq2cFCZBog.qkA8cNmTN8pVJO5Y9xmFGVKPC0G9J5aDK6Srk.EOYY!/b&bo=uAIKArgCCgIBGT4!&rf=viewer_4",
        bedroom: 3,
        area: 695,
        tenant: 4,
        rent: 39000,
        property: "",
        map: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.2794683&lng=114.1533675&zoom=17&markerLat=22.2794683&markerLng=114.1533675&markerTitle=Robinson%20Heights&locate=true"
      },
      {
        id: 6,
        title: "新裝特色Studio",
        estate: "Hoi deen Court",
        url: "https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4Tpksf/TmEUgtj9EK6.7V8ajmQrEKEtyr9*ijDMnanKiJRTzmI3YPPMqseIZXP*1I55SZKdBvWYpnqDwGxenGA4rfEZckQ50gACAWiCoBUL8t78uDM!/b&bo=uAIKArgCCgIBGT4!&rf=viewer_4",
        bedroom: 1,
        area: 150,
        tenant: 1,
        rent: 8000,
        property: "",
        map: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.2818462&lng=114.1836251&zoom=17&markerLat=22.2818462&markerLng=114.1836251&markerTitle=Hoi%20deen%20Court&locate=true"
      },
      {
        id: 7,
        title: "3房1廳電梯洋樓，豪華全新裝修",
        estate: "Lime Stardom",
        url: "https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4Tpksf/TmEUgtj9EK6.7V8ajmQrEPiAm5vkSalsMX4Fy8hUgMzl2zjuUhdL8Lj8atOIHZGYdOJR28uL0qfDR7zwV8Hp73km68VGIQYkCvzJj49KKjU!/b&bo=uAIKArgCCgIBGT4!&rf=viewer_4",
        bedroom: 3,
        area: 955,
        tenant: 5,
        rent: 49000,
        property: "",
        map: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.3212966&lng=114.16478&zoom=17&markerLat=22.3212966&markerLng=114.16478&markerTitle=Lime%20Stardom&locate=true"
      },
      {
        id: 8,
        title: "獨立套房，齊傢電，景觀開揚",
        estate: "AKVO Hotel",
        url: "https://m.qpic.cn/psc?/V537Qnpi0OXnJm2Konin077jks4Tpksf/TmEUgtj9EK6.7V8ajmQrEKwidzEFK0T8dlndc8KU7kRU.CnNGwq1to9EMChueDiVafsJK4waVBx7TDkp*MUbb58g6CkGN8K1FC*H0HIMZJ4!/b&bo=uAIKArgCCgIBGT4!&rf=viewer_4",
        bedroom: 2,
        area: 655,
        tenant: 3,
        rent: 25000,
        property: "",
        map: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.2849974&lng=114.1513049&zoom=17&markerLat=22.2849974&markerLng=114.1513049&markerTitle=AKVO%20Hotel&locate=true"
      }
    ]);
  }


  const hash = await sails.bcrypt.hash('123456', saltRounds);

  await User.createEach([{
      username: "admin",
      password: hash
    },
    // { username: "martin", password: hash, id: 1 },
    {
      username: "kenny",
      password: hash,
      id: 2,
      uid: "2"
    }
    // etc.
  ]);










};
