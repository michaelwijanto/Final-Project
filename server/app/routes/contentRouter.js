const express = require('express')
const router = express.Router()
const cantentController = require('../controllers/contentController')



router.get('/', cantentController.getContents)
router.post('/', cantentController.addContetnts)

router.get('/:id', cantentController.getContentsId)
router.put('/:id', cantentController.editContents)
router.delete('/:id', cantentController.deleteContents)


module.exports = router