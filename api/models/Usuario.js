/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var bcrypt = require('bcryptjs');
module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    user: { type: 'string', unique: true },

    nombre: { type: 'string' },

    apellido: { type: 'string' },

    email: { type: 'string', unique: true },

    telefono: { type: 'string' },

    descripcion: { type: 'string' },

    puntos: { type: 'number' },

    imagen: { type: 'string' },

    clave: { type: 'string' },

    estado: { type: 'boolean', defaultsTo: true },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
     // Add a reference to Pets
     publicaciones: {
      collection: 'publicacion',
      via: 'autor'
    },
    role: {
      model: 'role'
    }
    

  },
  beforeCreate: function (values, cb) {
    // Hash password
    bcrypt.hash(values.clave, 10,  (err, hash) => {
      if (err) {return cb(err);}
      values.clave = hash;
      //calling cb() with an argument returns an error. Useful for canceling the entire operation if some criteria fails.
      cb();
    });
  }

};

