'use strict'

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function getOrders(orderId) {
    if (typeof orderId === 'undefined') {
        return docClient.scan({
                TableName: 'waakye-orders'
            }).promise()
            .then(result => result.Items)
    }
    return docClient.get({
            TableName: 'waakye-orders',
            Key: {
                orderId: orderId
            }
        }).promise()
        .then(result => result.Item)
}

module.exports = getOrders