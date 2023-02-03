/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	API_SAENGGIBUAPP_GRAPHQLAPIIDOUTPUT
	API_SAENGGIBUAPP_IMAGETABLE_ARN
	API_SAENGGIBUAPP_IMAGETABLE_NAME
	ENV
	REGION
	STORAGE_ACALABFILESTORE_BUCKETNAME
Amplify Params - DO NOT EDIT */

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const {FileProvider} = require("./config/MulterConfig");
const {uploadImage} = require("./config/s3ClientConfig");

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next()
});

app.post(
    '/test-upload-image',
    // FileProvider.single("file"),
    async function (req, res) {
        req.file = {
            originalname: "test.txt",
            buffer: '54141'
        };

        if (req.file) {
            req.file.originalname = Date.now() + Math.round(Math.random() * 1e9) + req.file.originalname; // change file name
            const urlLink = await uploadImage(req.file); // upload s3 and return uploaded file url
            res.send({
                message: "upload successfully!",
                data: urlLink
            });
        } else {
            res.status(400);
            res.send({
                message: "file is required!",
            });
        }
    });


app.listen(3000, function () {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
