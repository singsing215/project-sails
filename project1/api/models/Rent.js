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

