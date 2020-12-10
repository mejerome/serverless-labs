'use strict'
const AWSXRay = require('aws-xray-sdk-core')
const AWS = AWSXRay.captureAWS(require('aws-sdk'))
const docClient = new AWS.DynamoDB.DocumentClient()

module.exports = function updateDeliveryStatus(request) {
  console.log('Update an order', request)

  if (!request.deliveryId || !request.status)
    throw new Error('Status and delivery ID are required')
  
  return docClient.update({
    TableName: 'pizza-orders',
    Key: {
      orderId: deliveryId
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