'use strict'

const Api = require('claudia-api-builder')
const api = new Api()

const getPizzas = require('./handlers/get-pizzas')
const createOrder = require('./handlers/create-order')
const updateOrder = require('./handlers/update-order')
const deleteOrder = require('./handlers/delete-order')

const updateDeliveryStatus = require('./handlers/update-delivery-status')

api.registerAuthorizer('userAuthentication', {
       providerARNs: ['arn:aws:cognito-idp:us-east-2:452363772603:userpool/us-east-2_8YBJY6EuL'] 
    })
api.get('/', () => 'Welcome to Ablekuma-Pizza API')

api.get('/pizzas', () => {
    return getPizzas()
})

api.get('/pizzas/{id}', (request) => {
    return getPizzas(request.pathParams.id)
}, {
    error: 404
})

api.post('/orders', (request) => {
    return createOrder(request)
}, {
    success: 201,
    error: 400,
    cognitoAuthorizer: 'userAuthentication'
})

api.put('/orders/{id}', (request) => {
    return updateOrder(request.pathParams.id, request.body)
}, {
    error: 400,
    cognitoAuthorizer: 'userAuthentication'
})

api.delete('/orders/{id}', (request) => {
    return deleteOrder(request.pathParams.id)
}, {
    error: 400,
    cognitoAuthorizer: 'userAuthentication'
})

api.post('/delivery', (request) => {
    return updateDeliveryStatus(request.body)
}, {
    success: 200,
    error: 400,
    cognitoAuthorizer: 'userAuthentication'
})

module.exports = api