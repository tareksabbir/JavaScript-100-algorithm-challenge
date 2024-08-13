////cheapest phone 
const phone = [
    {
        name: 'samsung',
        camera: 12,
        storage: '128gb',
        color: 'blue,red',
        price: 50000,

    },
    {
        name: 'iphone',
        camera: 12,
        storage: '128gb',
        color: 'blue,black',
        price: 120000,

    },
    {
        name: 'walton',
        camera: 48,
        storage: '128gb',
        color: 'blue,black',
        price: 40000,

    },
    {
        name: 'oppo',
        camera: 48,
        storage: '128gb',
        color: 'blue,black',
        price: 14000,

    },
    {
        name: 'nokia',
        camera: 48,
        storage: '128gb',
        color: 'blue,black',
        price: 16000,

    },
];

function cheapestPhone(phone) {
    let cheapPhone = phone[0]
    for (let i = 0; i < phone.length; i++) {
        let findPhone = phone[i];
        if (findPhone.price < cheapPhone.price) {
            cheapPhone = findPhone
        }
    }
    return cheapPhone;
}
let cheap = cheapestPhone(phone)
console.log(cheap)

// simple shopping cart

const shoppingCart = [
    {
        name: 'shoe',
        color: 'brown',
        size: '9',
        price: 3760,
        quantity: 2
    },
    {
        name: 'shirt',
        color: 'white',
        size: 'l',
        price: 3500,
        quantity: 5
    },
    {
        name: 'pant',
        color: 'blue',
        size: 'l',
        price: 2200,
        quantity: 6
    },
    {
        name: 'balt',
        color: 'brown',
        size: 9,
        price: 890,
        quantity: 4
    },
    {
        name: 'watch',
        color: 'brown',
        size: 9,
        price: 5000,
        quantity: 2
    },
]

function totalBill(cart) {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        let elementPrice = cart[i].price * cart[i].quantity;
        sum = sum + elementPrice;
    }
    console.log('total bill : ', sum)

}
totalBill(shoppingCart)


/// product discount


function ticketPrice(quantity) {

    let sum = 0;

    if (quantity <= 100) {
        sum = sum + (quantity * 100);

    }
    else if (quantity > 100 && quantity <= 200) {

        let priceForHund = 0
        for (let i = 1; i <= 100; i++) {
            priceForHund = priceForHund + 100
        }

        let priceFornextHund = 0;

        for (let i = 1; i <= quantity - 100; i++) {
            priceFornextHund = priceFornextHund + 90;
        }
        sum = priceForHund + priceFornextHund;
    }
    else if (quantity > 200) {
        let priceForHund = 0
        for (let i = 1; i <= 100; i++) {
            priceForHund = priceForHund + 100
        }

        let priceFornextHund = 0;

        for (let i = 101; i <= 200; i++) {
            priceFornextHund = priceFornextHund + 90;
        }
        let priceForNext = 0;

        for (let i = 1; i <= quantity - 200; i++) {
            priceForNext = priceForNext + 70;
        }
        sum = priceForHund + priceFornextHund + priceForNext;

    }
    return sum;

}

let totalPrice = ticketPrice(210)
console.log('total ticket price: ', totalPrice)


/// best way 
function ticketPrices(quantity) {
    let first100ticket = 100;
    let second100ticket = 90;
    let restTicket = 70;
    if (quantity <= 100) {
        const first100ticketPrice = first100ticket * quantity;
        return first100ticketPrice;
    }
    if (quantity <= 200) {
        const first100ticketPrice = first100ticket * 100;
        const rest = (quantity - 100) * second100ticket;
        return first100ticketPrice + rest;
    }
    if (quantity > 200) {
        const first100ticketPrice = first100ticket * 100;
        const second100ticketPrice = 100 * second100ticket;
        const rest = (quantity - 200) * restTicket;
        return first100ticketPrice + second100ticketPrice + rest
    }

}

let price = ticketPrices(202);
console.log(price);


