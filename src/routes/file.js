const express = require('express');
const multer = require('multer');
const fileController = require('../controller/file.controller');

const router = express.Router();

// Set up multer for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // destination folder
    },
    filename: function (req, file, cb) {
        // Define the filename as the original filename
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// for render file
router.get('/' , fileController.renderFile);

// Route for file upload
router.post('/fileupload', upload.single('myfile'), fileController.handleFileUpload);

// Route for file conversion
router.post('/convert', upload.single('myfile'), fileController.handleFileConversion);

module.exports = router;
