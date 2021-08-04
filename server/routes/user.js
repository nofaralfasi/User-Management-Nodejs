const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes
router.get('/', userController.view);
router.post('/', userController.find);
router.get('/new_user', userController.form);
router.post('/new_user', userController.create);
router.get('/update_user/:id', userController.edit);
router.post('/update_user/:id', userController.update);
router.get('/view_user/:id', userController.viewall);
router.get('/:id',userController.delete);
  
module.exports = router;