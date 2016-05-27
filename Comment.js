var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    createTime: Date,
    author: Schema.Types.Mixed,
    content: String,
    master: Schema.Types.Mixed
});

module.exports = mongoose.model('Comment', commentSchema);