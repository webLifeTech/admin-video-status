const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let airlineSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    country: { type: String, default: '' },
    logo: { type: String, default: '' },
    slogan: { type: String, default: '' },
    head_quaters: { type: String, default: '' },
    website: { type: String, default: '' },
    established: { type: String, default: '' },
    editedby: { type: Schema.Types.ObjectId, ref: 'airlines', default: null },
}, { timestamps: true })

module.exports = mongoose.model('airlines', airlineSchema)