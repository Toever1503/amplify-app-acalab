module.exports.ENVIROMENT_CONFIG = {
    s3Bucket: process.env.STORAGE_ACALABFILES3_BUCKETNAME || "test-buck",
    s3Region: process.env.REGION,
}