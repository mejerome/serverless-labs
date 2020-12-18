'use strict'

const Api = require('claudia-api-builder')
const api = new Api()

const getWaakye = require('./handlers/get-waakye')
const getOrders = require('./handlers/get-orders')
const createOrder = require('./handlers/create-orders')
const updateOrder = require('./handlers/update-order')
const updateDelivery = require('./handlers/update-delivery')
const deleteOrder = require('./handlers/delete-order')
const getSignedUrl = require('./handlers/generate-presigned-url')

api.registerAuthorizer('userAuthentication', {
    providerARNs: ['arn:aws:cognito-idp:us-east-2:452363772603:userpool/us-east-2_5CqLAKiND']
})

api.get('/', () => 'Welcome to the Efie Waakye API')

api.get('/waakye', () => {
    return getWaakye()
})

api.get('/orders/{id}', (request) => {
    return getOrders(request.pathParams.id)
}, {
    success: 200,
    error: 404,
    cognitoAuthorizer: 'userAuthentication'
})

api.post('/orders', (request) => {
    return createOrder(request)
}, {
    success: 200,
    error: 404,
    cognitoAuthorizer: 'userAuthentication'
})

api.put('/orders/{id}', (request) => {
    return updateOrder(request.pathParams.id, request.body)
}, {
    success: 200,
    error: 404,
    cognitoAuthorizer: 'userAuthentication'
})

api.delete('/orders/{id}', (request) => {
    return deleteOrder(request.pathParams.id, request.context.authorizer.claims)
}, {
    error: 404,
    cognitoAuthorizer: 'userAuthentication'
})

api.post('delivery', request => updateDelivery(request.body), {

    success: 200,
    error: 400
})

api.get('upload-url', (request) => {
    return getSignedUrl()
}, {
    error: 400,
    // cognitoAuthorizer: 'userAuthentication'
})

module.exports = api