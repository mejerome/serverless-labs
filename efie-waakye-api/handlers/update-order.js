'use strict'

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

async function updateOrder(orderId, request) {
    console.log('orderID: ', orderId, '& waakye: ', request.waakye, ' & address: ', request.address)
    if (!request || !request.waakye || !request.address) {
        throw new Error('You should provide order and address to update your order.')
    }
    const timeStamp = new Date().toISOString();
    const params = {
        TableName: 'waakye-orders',
        Key: {
            orderId: orderId
        },
        UpdateExpression: "set waakye = :w, address = :a, updateTime = :u",
        ExpressionAttributeValues: {
            ":w": request.waakye,
            ":a": request.address,
            ":u": timeStamp
        },
        ReturnValues: "ALL_NEW"
    }
    return docClient.update(params).promise()
        .then((result) => {
            console.log('Order is updated.', result)
            return result.Attributes
        })
        .catch((updateError) => {
            console.log('Oops, your order is not update', updateError)
            throw updateError
        })

}

module.exports = updateOrder