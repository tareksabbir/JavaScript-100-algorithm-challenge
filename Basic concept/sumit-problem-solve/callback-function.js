const takeOrder = (customer, callback) => {
    console.log(`take order for ${customer}`)
    callback(customer)
}


function paceOrder(customer, callback) {
    console.log(`order placed for ${customer}`)
    setTimeout(() => {
        console.log('cooking completed')
        callback(customer)
    }, 3000)

}

function delivered(customer) {
    console.log(`order successfully delivered for ${customer}`)
}



takeOrder('customer 1', () => {
    paceOrder(customer, () => {
        delivered(customer)
    })
})
