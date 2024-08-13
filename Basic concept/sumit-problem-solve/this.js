let karim = {
    name: 'Karim Rahman',
    dob: 1996,
    age: function (currentYear) {
        console.log(this.name + ' is ' + (currentYear - this.dob) + ' years old!');
    }
}


let rahim = {
    name: 'Rahim Abdu',
    dob: 1986
}

karim.age.call(karim,2024)