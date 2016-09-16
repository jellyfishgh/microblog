const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Comment', new Schema({
    createTime: Date,
    author: Schema.Types.Mixed,
    content: String,
    master: Schema.Types.Mixed
}));
