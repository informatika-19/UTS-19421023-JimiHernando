const pemesanmodel = require('../model/pemesan')
const objectid = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) => {
    pemesanmodel.create(data)
    .then (() => resolve({
        status: true,
        pesan: 'berhasil create'
    })).catch(() => reject ({
        status: false,
        pesan: 'gagal create'
    }))
})

exports.update = (id,data) =>
new Promise ((resolve, reject) => {
    pemesanmodel.updateOne({
        _id : objectid(id)
    }, data).then (() => resolve ({
        status: true,
        pesan: 'behasil update'
    })).catch (() => reject ({
        status: false,
        pesan: 'gagal update'
    }))
})

exports.showAllData = () =>
new Promise(( resolve, reject) => {
    pemesanmodel.find()
    .then(result => {
        resolve({
            status: true,
            pesan: 'Berhasil input data',
            data: result
        })
    }).catch((err) => {
        console.log(err)
        reject ({
           status: false,
           pesan: 'Gagal input Data',
           data: []
       })
    })
})

exports.showDataByID = (id) =>
new Promise((resolve, reject) => {
    pemesanmodel.findOne({
        _id : objectid(id)
    }).then(result => {
        resolve({
            status: true,
            pesan: 'Berhasil input  Data',
            data: result
        })
    }).catch (() => reject ({
        status: false,
        pesan: 'Gagal input Data',
        data: null
    }))
})

exports.delete = (id) =>
new Promise((resolve, reject) => {
    pemesanmodel.deleteOne({
        _id : objectid(id)
    }).then(() => resolve ({
        status: true,
        pesan: 'Berhasil menghapus Data'
    })).catch(() => ({
        status: false,
        pesan: 'gagal menghapus data'
    }))
})