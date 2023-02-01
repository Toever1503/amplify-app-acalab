/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
const aws = require("aws-sdk");

const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({
  apiVersion: "2016-04-18",
});

/**
 * @type {import('@types/aws-lambda').PostConfirmationTriggerHandler}
 */
exports.handler = async (event, context, callback) => {
  const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider(
    { apiVersion: "2016-04-18" }
  );
  let GroupName = "saenggibu";
  if (
    event.request.clientMetadata != undefined &&
    event.request.clientMetadata != null
  ) {
    GroupName = event.request.clientMetadata.GroupName;
  }
  const groupParams = {
    GroupName,
    UserPoolId: event.userPoolId,
  };
  const addUserParams = {
    GroupName,
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };

  try {
    await cognitoidentityserviceprovider.getGroup(groupParams).promise();
  } catch (e) {
    await cognitoidentityserviceprovider.createGroup(groupParams).promise();
  }

  try {
    await cognitoidentityserviceprovider
      .adminAddUserToGroup(addUserParams)
      .promise();
    callback(null, event);
  } catch (e) {
    callback(e);
  }
};
