const { Router } = require('express')
const outro = require('../services/outro')

const router = Router()

/**
 * Adds a text outro to the default video
 */
router.post('/outro', async (req, res, next) => {
    try {
        const text = req.body.text
        await outro.addOutro({data: text})
        
        res.send('success, can now view the new video in the designated folder')
    } catch (error) {
        console.log(error.message)
        res.send('an error has occured').status(500)   
    }
})


router.get('/test', (req, res, next) => {
    res.send('test test')
})

module.exports = router