//importing express
const express = require('express');
const router = express.Router();

//console log to check if router loaded or not
console.log('Router is loaded');

//importing multer
const multer = require('multer');

//importing controllers
const homeController = require('../controllers/home_controller');
const csvController = require('../controllers/csv_controller');

//Multer
var upload = multer({ dest: 'uploads/csv'});


//getting routes
router.get('/', homeController.home);
router.post('/upload', upload.single('file') ,csvController.upload);
router.get('/view/:id', csvController.view);
router.get('/delete/:id', csvController.delete);

//exporting router
module.exports = router;