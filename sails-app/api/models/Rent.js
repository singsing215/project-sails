/**
 * Rent.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    title: {
      type: "string"
    },

    estate: {
      type: "string"
    },


    property: {
      type: "string"
    },

    url: {
      type: "string"
    },

    bedroom: {
      type: "number"
    },

    area: {
      type: "number"
    },

    tenant: {
      type: "number"
    },

    rent: {
      type: "number"
    },

    rentby: {
      collection: 'user',
      via: 'renting'
    },
    // created: {
    //   type: 'ref', columnType: 'datetime',
    // },

    // updated: {
    //   type: 'ref', columnType: 'datetime',
    // },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    qestate: {
      type: "string"
    },

    qbedroom: {
      type: "number"
    },

    qmaxbedroom: {
      type: "number"
    },

    qminbedroom: {
      type: "number"
    },


    qarea: {
      type: "number"
    },

    qrent: {
      type: "number"
    },

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

