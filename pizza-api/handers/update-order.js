function updateOrder(id, updates) {
    if(!id || !updates)
        throw new Error('You have provide an order ID with update content.')
    return {
        message: 'Order ${id} was successfully updated.'
    }
}

module.exports = updateOrder