'use strict';
const jwt = require('jwt-simple');
const moment = require('moment');
const global = require('../GLOBAL');
exports.createToken = function (user) {
  //console.log('esto es el jwt', user);
  let payload = {
    id: user.id,
    nombre: user.nombre,
    apellido: user.apellido,
    user: user.user,
    email: user.email,
    role: user.role,
    iat: moment().unix(),
    exp: moment().add(30, 'days').unix()
  };
  return jwt.encode(payload, global.secret,null, null);
};