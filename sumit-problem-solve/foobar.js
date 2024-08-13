let x = 60;

function foo() {
    console.log(x)
}

function bar() {
    let x = 20;
    foo();
}
bar();