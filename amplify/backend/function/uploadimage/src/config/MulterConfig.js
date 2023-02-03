const multer = require("multer");

const FileProvider = multer({
    storage: multer.memoryStorage(), // config memory to storage uploaded file.
    limits: {fieldSize: 20 * 1024 * 1024} // limit maximum request size 20mb. (the lambda only handle maximum about 10mb per request)
});
module.exports.FileProvider = FileProvider;