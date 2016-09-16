const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Blog', new Schema({
    title: String,
    createTime: Date,
    author: Schema.Types.Mixed,
    desc: String,
    coverImg: String,
    content: String,
    likes: Number,
    comments: [Schema.Types.Mixed]
}));
