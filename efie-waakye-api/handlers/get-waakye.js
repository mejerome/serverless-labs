'use strict'

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function getWaakye(waakyeId) {
    if (typeof waakyeId == 'undefined') {
        return docClient.scan({
                TableName: 'waakye'
            }).promise()
            .then(result => result.Items)
    }
}

module.exports = getWaakye