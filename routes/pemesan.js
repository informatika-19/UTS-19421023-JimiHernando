const router = require('express').Router()
const pemesanController = require ('../controller/pemesan')

router.post('/create/', (req, res)=> {
    pemesanController.create(req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })

  router.put('/update/:id', (req, res)=> {
    pemesanController.update(req.params.id, req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })

  router.get('/getall/', (req, res)=> {
    pemesanController.showAllData()
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })

  router.get('/getbyid/:id', (req, res)=> {
    pemesanController.showDataByID(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })

  router.delete('/delete/:id', (req, res)=> {
    pemesanController.delete(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })

  module.exports = router