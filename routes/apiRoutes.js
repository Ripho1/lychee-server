const { Router } = require('express')
const apiVideoLayers = require('./apiVideoLayers')

const router = Router()

router.use('/video-layers', apiVideoLayers)

module.exports = router
