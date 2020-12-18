'use strict'

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function deleteOrder(orderId, userData) {

    return docClient.get({
            TableName: 'waakye-orders',
            Key: {
                orderId: orderId
            }
        }).promise()
        .then(result => result.Item)
        .then(item => {
            if (item.cognitoUsername !== userData['cognito:username'])
                throw new Error('Order is not your la.')

            if (item.orderStatus !== 'pending')
                throw new Error('Order status not pending.')
        })
        .then(() => {
            return docClient.delete({
                TableName: 'waakye-orders',
                Key: {
                    orderId: orderId
                }
            }).promise()
        })
}

module.exports = deleteOrder