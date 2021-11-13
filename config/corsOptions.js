require('dotenv').config();

const originCors = process.env.ORIGIN_CORS || '';
let whitelist = originCors.split(',');

let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error(`Not allowed by CORS: ${origin}`));
    }
  },
};

module.exports = corsOptions;
