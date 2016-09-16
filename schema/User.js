const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    username: String,
    birthday: Date,
    sex: Boolean,
    location: {
        province: String,
        city: String
    }
}));
