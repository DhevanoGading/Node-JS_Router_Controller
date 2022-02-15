'use strict'

const express = require('express')
const pendudukController = require('../controllers/penduduk.controller')
const router = new express.Router();

router.get("/", pendudukController.index)
router.post("/add", pendudukController.add)
router.put("/put", pendudukController.put)
router.delete("/delete/:id", pendudukController.delete)

module.exports = router