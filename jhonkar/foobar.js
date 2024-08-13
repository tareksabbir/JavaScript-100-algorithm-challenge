function fooBar(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('foo bar')
        }
        else if (i % 3 === 0) {
            console.log('foo')
        }
        else if (i % 5 === 0) {
            console.log('bar')
        }
        else {
            console.log(i)
        }
    }

}
fooBar(18) 