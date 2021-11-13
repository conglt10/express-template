const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  address: {
    type: String,
    match: [/^0x[a-fA-F0-9]{40}$/, 'address is invalid'],
    lowercase: true,
    require: true,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
