const clientScript = require('../../public/js/client');
const path = require('path');

// Function to handle file upload logic
exports.handleFileUpload = (req, res) => {
    // Assuming that the file details are stored in req.file
    const { filename, path: filePath } = req.file;
    console.log('req.file in controller For handleFileUpload' ,req.file);
    // Respond to the client
    res.json({
        status: 'done',
        message: 'File uploaded successfully',
        fileDetails: {
            filename,
            filePath: path.join('/', filePath), // Return the file path with a leading '/'
        },
    });
};

// Function to handle file conversion logic
exports.handleFileConversion = (req, res) => {
    // Assuming that the file details are stored in req.file
    const { filename, path: filePath } = req.file;
    console.log('Controller for handleFileConversion ==>>',req.file )

    // Perform any necessary processing with the file details

    // Respond to the client
    res.json({
        status: 'done',
        message: 'File converted successfully',
        fileDetails: {
            filename,
            filePath: path.join('/', filePath), // Return the file path with a leading '/'
        },
    });
};

module.exports.renderFile = async(req, res, next) => {
    const fileuploadStatus = req.app.locals.fileuploadStatus;
    console.log('fileuploadStatus===>',req.app.locals.fileuploadStatus )
    const docuploadStatus = req.app.locals.docuploadStatus;
    console.log('docuploadStatus ==>',req.app.locals.docuploadStatus )
    const htmlVal = res.app.locals.htmlVal;
    console.log('htmlVal ==>>', res.app.locals.htmlVal);
    const errorMsg = res.app.locals.errorMsg;
    req.app.locals.fileuploadStatus = false;
    req.app.locals.docuploadStatus = false;
    res.app.locals.htmlVal = '';
    clientScript.includeHtml(htmlVal);
    res.render('file', {
        title: 'File Upload Using Multer in Node.js and Express',
        utils: clientScript,
        fileuploadStatus: fileuploadStatus,
        docuploadStatus: docuploadStatus,
        errorMsg: errorMsg,
        htmlVal: htmlVal
    });
};
