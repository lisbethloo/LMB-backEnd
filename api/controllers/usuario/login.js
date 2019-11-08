var bcrypt = require('bcryptjs');
const jwt = require('../../services/jwt');
module.exports = {
/*creacion del login del usuario*/

  friendlyName: 'Login',


  description: 'Login usuario.',


  inputs: {
    email:{
      type:'string',
      required: true
    },
    clave:{
      type: 'string',
      required: true
    }

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    var us = await Usuario.findOne({
      email: inputs.email
    }).populate('role');
    if (us) {
      bcrypt.compare(inputs.clave, us.clave, (err, res) => {
        us.clave = undefined;
        if (res) {
          const token = jwt.createToken(us);
          us.calve = undefined;
          return exits.success({ ok: true, data: us, token: token, msg: 'Correcto' });
        } else {
          return exits.success({ ok: false, msg: 'Clave incorrecta' })
        }
      });
    } else {

      return exits.success({ ok: false, msg: 'usuario no existe' });
    }

  }


};
