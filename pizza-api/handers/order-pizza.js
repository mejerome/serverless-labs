function createOrder(order) {
    if (!order || !order.pizzaId || !order.address)
        throw new Error('To order pizza please provide a pizza type and address to deliver the order.')
    return {}
}

module.exports = createOrder