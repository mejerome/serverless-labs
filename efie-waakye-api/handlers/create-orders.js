'use strict'
const AWSXRay = require('aws-xray-sdk-core')
const AWS = AWSXRay.captureAWS(require('aws-sdk'))
const docClient = new AWS.DynamoDB.DocumentClient()
const uuid = require('uuid')

async function createOrder(request) {
    console.log('Saving this order ', request.body)
    const userData = request.context.authorizer.claims
    console.log('User data ', userData)

    let userAddress = request.body && request.body.address

    if (!userAddress) {
        JSON.parse(userData.address).formatted
    }

    if (!request.body || !request.body.waakye || !userAddress) {
        throw new Error('You for choose waakye and give we address where we for deliver.')
    }

    const time = new Date()
    const timeStamp = time.toISOString()

    console.log(setNextDay9(time))
    const params = {
        TableName: 'waakye-orders',
        Item: {
            cognitoUsername: userAddress['cognito:username'],
            orderId: uuid(),
            orderTime: timeStamp,
            deliveryTime: setNextDay9(time),
            waakye: request.body.waakye,
            address: request.body.address,
            orderStatus: 'pending'
        }
    }
    return docClient.put(params).promise()
        .then((res) => {
            console.log('Order save oh.', res)
            return res
        })
        .catch(saveError => {
            console.log('Oops, order no save', saveError)
            throw saveError
        })
}


function setNextDay9(dt) {
    dt.setHours(33, 0, 0, 0);
}
module.exports = createOrder