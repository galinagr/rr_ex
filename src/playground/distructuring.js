// const person = {
//     name: 'Andrew',
//     age: 28,
//     location: {
//         city: 'Philadepphia',
//         temp: 92
//     }    
// };
// 
// const {name = 'Anononymous', age} = person;
// console.log(`I'm ${name} and I'm ${age}. `);

// const {city, temp: temperature} = person.location;
// if  (city && temperature) {
//     console.log(`It's ${temperature} is ${city}.`)
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//        // name: 'Pinguin'
//    }
// };
// const {name: publisherMame = 'Self-published'} = book.publisher;
//     console.log(publisherMame);
// ;{

const address = ['1235 & Junior Street', 'Philadelphia', 'Pensylvania', '1235'];

const [, , state = 'New York'] = address;
console.log(`You are in ${state}.`);

const item =['Coffee (hot)', '$2.00', '$2.50', '$4.50'];

const [hot, , medium] = item;
console.log(`A medium COffee (${hot}) costs ${medium}.`);