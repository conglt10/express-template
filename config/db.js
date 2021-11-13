const mongoose = require('mongoose');

require('dotenv').config();

const connectDb = () => {
  mongoose.connect(
    process.env.MONGODB_URI,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (error) => {
      if (error) console.log(error);
    }
  );
};

module.exports = connectDb;
