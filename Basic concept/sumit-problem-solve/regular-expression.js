const data = [
    { name: "Alice", age: 30, email: "alice@example.com" },
    { name: "Bob", age: 25, Email: "bob@examples.org" },
    { name: "Charlie", age: 35, phone: "123-456-7890" }
];

console.log(Object.values(data[0]))

const regex = /ema/i; // Matches keys containing "ail"

const matchingValues = data.flatMap(obj => {
    
    return Object.entries(obj)
      .filter(([key, value]) => regex.test(key))
      .map(([key, value]) => value);


});

console.log(matchingValues);