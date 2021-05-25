const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pemesanSchema = new Schema({
    nama : {
        type: String
    },
    alamat : {
        type: String
    },
    no_HP : {
        type: String
    },
    waktu_boking : {
        type: String
    }
})

module.exports = mongoose.model('pemesan', pemesanSchema)