var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    birthday: Date,
    sex: Boolean,
    location: {
        province: String,
        city: String
    }
});

module.exports = mongoose.model('User', userSchema);