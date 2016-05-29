var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: String,
    createTime: Date,
    author: Schema.Types.Mixed,
    desc: String,
    coverImg: String,
    content: String,
    likes: Number,
    comments: [Schema.Types.Mixed]
});

module.exports = mongoose.model('Blog', blogSchema);