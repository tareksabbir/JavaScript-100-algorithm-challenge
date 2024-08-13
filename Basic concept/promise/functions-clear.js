const salary = [{
    name: "korim",
    payment: 3000
},
{
    name: "korim",
    payment: 6000
},
{
    name: "korim",
    payment: 6000
},
]


const totalBills = (salary) => {
    const arr = []
    salary.map((pay) => {
        const amount = pay.payment
        arr.push(amount)

    })
    const totalBill = arr.reduce((total, value) => {
        return total + value
    })
    return totalBill

}

console.log(`your total bill is : `, totalBills(salary))



const arr = []
const hopes = salary.map((pay) => {
    const amount = pay.payment
    arr.push(amount)

})

function totalBill(total,value){
    return total+value
}

console.log(arr.reduce(totalBill))

const totalBill = arr.reduce((total, value) => {
    return total + value
})

console.log(totalBill)


