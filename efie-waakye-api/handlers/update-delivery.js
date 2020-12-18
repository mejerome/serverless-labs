'use strict'

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function updateDelivery(request) {
    if (!request.deliveryId || !request.status)
        throw new Error('Status and delivery are required oh')

    return docClient.update({
            TableName: 'waakye-orders',
            Key: {
                orderId: request.deliveryId
            },
            AttributeUpdates: {
                deliveryStatus: {
                    Action: 'PUT',
                    Value: request.status
                }
            }
        }).promise()
        .then(() => {
            return {}
        })
}

module.exports = updateDelivery