'use strict'

const Api = require('claudia-api-builder')
const api = new Api()

const getWaakye = require('./handers/get-waakye')
const createWaakye = require('./handers/create-waakye')
const updateWaakye = require('./handers/update-waakye')
const deleteWaakye = require('./handers/delete-waakye')


api.get('/waakye', () => {
    return [
        'Bibiara wo mu',
        'Borga package',
        '3h)nih) package'
    ]
})

module.exports = api