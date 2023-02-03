/* Amplify Params - DO NOT EDIT
	API_SAENGGIBUAPP_GRAPHQLAPIIDOUTPUT
	API_SAENGGIBUAPP_IMAGETABLE_ARN
	API_SAENGGIBUAPP_IMAGETABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const crypto = require('@aws-crypto/sha256-js');
const {defaultProvider} = require('@aws-sdk/credential-provider-node');
const {SignatureV4} = require('@aws-sdk/signature-v4');
const {HttpRequest} = require('@aws-sdk/protocol-http');
const fetch = require('node-fetch');

const GRAPHQL_ENDPOINT = process.env.API_SAENGGIBUAPP_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';
const {Sha256} = crypto;

const query = /* GraphQL */ `
    query LIST_TODOS {
        listTodos {
            items {
                id
                name
                description
            }
        }
    }
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

export const handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    if (false) {
        const endpoint = new URL(GRAPHQL_ENDPOINT);

        const signer = new SignatureV4({
            credentials: defaultProvider(),
            region: AWS_REGION,
            service: 'appsync',
            sha256: Sha256
        });

        const requestToBeSigned = new HttpRequest({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                host: endpoint.host
            },
            hostname: endpoint.host,
            body: JSON.stringify({query}),
            path: endpoint.pathname
        });

        const signed = await signer.sign(requestToBeSigned);
        const request = new fetch.Request(endpoint, signed);

        let statusCode = 200;
        let body;
        let response;

        try {
            response = await fetch(request);
            body = await response.json();
            if (body.errors) statusCode = 400;
        } catch (error) {
            statusCode = 500;
            body = {
                errors: [
                    {
                        message: error.message
                    }
                ]
            };
        }

        return {
            statusCode,
            //  Uncomment below to enable CORS requests
            // headers: {
            //   "Access-Control-Allow-Origin": "*",
            //   "Access-Control-Allow-Headers": "*"
            // },
            body: JSON.stringify(body)
        };
    }
};