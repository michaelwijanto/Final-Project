const express = require('express')
const router = express.Router()
const cantentController = require('../controllers/contentController')



router.get('/contents', cantentController.getContents)
router.post('/contents', cantentController.addContetnts)

router.get('/contents/:id', cantentController.getContentsId)
router.put('/contents/:id', cantentController.editContents)
router.delete('/contents/:id', cantentController.deleteContents)


module.exports = router