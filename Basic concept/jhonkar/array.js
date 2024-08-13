//// array and methods----------------------

const tableItems = ['pen', 'pencil', 'others', 'book'];
console.log(tableItems.indexOf('book'));

tableItems[3] = 'kola';
console.log(tableItems);


tableItems.pop('kola')
console.log(tableItems);

console.log(tableItems);
console.log(tableItems[2]);

tableItems.push('vape', 'guti', 'muti', 'shuti', 'buti');
tableItems.pop('buti');

console.log(tableItems);

console.log(tableItems.slice(1, 5));
console.log(tableItems.reverse());



//// array slice-------------------------------

const friends = [5, 7, 8, 10, 45, 30, 17, 19, 21, 40, 31];
let newFriends = friends.slice(3, 6);
console.log('my new friends: ', newFriends);
console.log('fuck you all:', friends);


////array splice ------------------------------------------------------

const okFriends = [5, 7, 8, 10, 45, 30, 17, 19, 21, 40, 313, 6, 99, 777, 89, 90, 8, 10, 45, 30, 17, 19, 21, 40, 313];
let okNewFriends = okFriends.splice(3, 6);
let noNewFriends = okFriends.splice(3, 6, 99, 777, 89, 90); // ekhane ... diye ager jaigai kon gulo boshacchi jamon 99,777,89,90

console.log('okFriends fuck you all:', okFriends);
console.log('okNewFriends my new friends: ', okNewFriends);
console.log('noNewFriends fuck you bro:', noNewFriends);

//// array join using concat--------------------------------------------

let newArray1 = [10, 20, 22, 33, 44, 55, 66]
let newArray2 = [100, 200, 220, 330, 440, 550, 660]
let arrayJoin = newArray1.concat(newArray2);
console.log(arrayJoin);




//// //duplicate array remove

function uniqNames(biri) {
    //console.log(biri);
    let biriKhor = []
    for (let i = 0; i < biri.length; i++) {
        if (!biriKhor.includes(biri[i])) {
            biriKhor.push(biri[i]);
        }
    }
    console.log(biriKhor);

}

const brikhorPeople = ['pen', 'pencil', 'vape', 'guti', 'muti', 'shuti', 'buti', 'others', 'book', 'pencil', 'guti', 'muti', 'shuti']

let newArray22 = [100, 200, 220, 330, 440, 550, 660]
uniqNames(brikhorPeople)
uniqNames(newArray22)







