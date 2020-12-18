const AWS = require('aws-sdk')



AWS.config.region = "us-east-2"

AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-east-2:cf6b0472-edab-420a-ac04-659d783e3cbf"
})

AWS.config.credentials.get(function() {
    var accessKeyId = AWS.config.credentials.accessKeyId
    var secretAccessKey = AWS.config.credentials.secretAccessKey
    var sessionToken = AWS.config.credentials.sessionToken
})