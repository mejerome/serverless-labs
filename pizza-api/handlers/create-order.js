'use strict'

const AWSXRay = require('aws-xray-sdk-core')
const AWS = AWSXRay.captureAWS(require('aws-sdk'))
const docClient = new AWS.DynamoDB.DocumentClient()
const rp = require('minimal-request-promise')

module.exports = function createOrder(request) {
    console.log('Save an order', request)

    if (!request || !request.pizza || !request.address)
        throw new Error('To order pizza please provide a pizza type and address to deliver the order.')
    
    return rp.post('https://some-like-it-hot.effortless-serverless.com/delivery', {
        headers: {
            "Authorization": "aunt-marias-pizzeria-1234567890",
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            pickupTime: '15.44pm',
            pickupAddress: 'Aunt Maria Pizzeria',
            deliveryAddress: request.address,
            webhookUrl: 'https://irywdqh9v3.execute-api.us-east-2.amazonaws.com/latest/delivery'
        })
    })
    .then(rawResponse => JSON.parse(rawResponse.body))
    .then(response => {
        return docClient.put({
            TableName: 'pizza-orders',
            Item: {
                orderId: response.deliveryId,
                pizza: request.pizza,
                address: request.address,
                orderStatus: 'pending'
            }
        }).promise()
    })
    .then(res => {
        console.log('Order is saved!', res)
        return res
    })
    .catch(saveError => {
        console.log(`Oops, order is not saved :(`, saveError)
        throw saveError
    })
}

