const items = [{ name: "bmw", model: "M750", serialNumber: 654789, color: "white" }, { name: "Audi", model: "a7", serialNumber: 654769, color: "white" }, { name: "bmwS", model: "a750", serialNumber: 654789, color: "white" },];

function matchItem(items, num) {
    let matched = [];
    for (const item of items) {
        if (item.serialNumber.toString().includes(num)) {
            matched.push(item);
        }
    }
    return matched;
}

let match = matchItem(items, "654789");
console.log(match);
