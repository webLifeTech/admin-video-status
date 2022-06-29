const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    sub: { type: String, default: '' },
    profile: { type: String, default: '' },
    editedby: { type: Schema.Types.ObjectId, ref: 'users', default: null },
}, { timestamps: true })

module.exports = mongoose.model('users', userSchema)