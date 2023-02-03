var AWS = require('aws-sdk');
const {ENVIROMENT_CONFIG} = require("./EnviromentConfig");
var S3 = new AWS.S3({ region: ENVIROMENT_CONFIG.s3Region}); // need change later

/**
 *
 * @param tmpFile
 * @returns {Promise<string>} uploaded file url
 */
const uploadImage = async (tmpFile) => {
    var params = {
        Bucket: ENVIROMENT_CONFIG.s3Bucket,
        Key: 'signup/'+  tmpFile.originalname,
        Body: tmpFile.buffer
    };
    try {
        console.log('uploading file: ', params)
        let s3Response = await S3.upload(params).promise();
        return s3Response.Location;

    } catch (error) {
        console.log('upload file got error: ', error);
        return null;
    }
};


module.exports.uploadImage = uploadImage;