function deleteOrder(id) {
    if(!id)
        throw Error('You have to provide ID of order to delete.')
    return {
        message: 'Order ${id} was successfully deleted.'
    }
}

module.exports = deleteOrder