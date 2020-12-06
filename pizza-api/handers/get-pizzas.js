const pizzas = require('../data/pizzas.json')

function getPizzas(pizzaId) {
    if(!pizzaId)
        return pizzas

    const pizza = pizzas.find((pizza) => {
        return pizza.id == pizzaId
    })

    if (pizza)
        return pizza

    throw new Error('Sorry we do not have the pizza you requested.')
}

module.exports = getPizzas