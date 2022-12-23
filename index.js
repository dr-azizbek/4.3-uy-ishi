//birinchisi
let fiveAndGreaterOnly = (arr, num) => arr.filter(n => n > num);
console.log(fiveAndGreaterOnly([3, 6, 8, 2], 5))

//Ikkinchi
const evensOnly = (arr) => arr.filter(x => x % 2 === 0)
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

//Uchinchi
let fiveCharactersOrFewerOnly = (arr) => arr.filter(x => x.length <= 5)
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]


//To'rtinchi
let peopleWhoBelongToTheIlluminati = (arr) => arr.filter((elm) => elm.member)
console.log(
    peopleWhoBelongToTheIlluminati([
        { name: "Angelina Jolie", member: true },
        { name: "Eric Jones", member: false },
        { name: "Paris Hilton", member: true },
        { name: "Kayne West", member: false },
        { name: "Bob Ziroll", member: true },
    ])
);


//beshinchi
let ofAge = (arr) => arr.filter((elm) => elm.age > 18)
console.log(
    ofAge([
        { name: "Angelina Jolie", age: 80 },
        { name: "Eric Jones", age: 2 },
        { name: "Paris Hilton", age: 5 },
        { name: "Kayne West", age: 16 },
        { name: "Bob Ziroll", age: 100 },
    ])
);


//oltinchi
let ofAges = (arr) => arr.sort((a, b) => a.age - b.age)
console.log(
    ofAges([
        { name: "Angelina Jolie", age: 80 },
        { name: "Eric Jones", age: 2 },
        { name: "Paris Hilton", age: 5 },
        { name: "Kayne West", age: 16 },
        { name: "Bob Ziroll", age: 100 },
    ])
);


//yettinchi
let playersFuc = (arr) => arr.filter((elem) => elem.position.includes(('WR')))

let players = [{ name: 'Wes', position: 'WR' }, { name: 'Coty', position: 'QB' }, { name: 'Joe', position: 'WR' }];
console.log(playersFuc(players))

//sakkizinchi
const students = [
    { name: "Bob", group: "NT-79", voted: true },
    { name: "Jake", group: "NT-77", voted: true },
    { name: "Kate", group: "NT-70", voted: false },
    { name: "Sam", group: "NT-77", voted: false },
    { name: "Phil", group: "NT-70", voted: true },
    { name: "Ed", group: "NT-79", voted: true },
    { name: "Tami", group: "NT-77", voted: true },
    { name: "Mary", group: "NT-70", voted: false },
    { name: "Becky", group: "NT-79", voted: false },
    { name: "Joey", group: "NT-70", voted: true },
    { name: "Jeff", group: "NT-79", voted: true },
    { name: "Zack", group: "NT-79", voted: false },
    { name: "Hack", group: "NT-100", voted: true },
    { name: "Hack", group: "NT-100", voted: true },
    { name: "Hack", group: "NT-100", voted: true },
    { name: "Hack", group: "NT-100", voted: true },
];
const studentsByGroup = students.reduce((grs, prd) => {
    const { group } = prd;
    grs[group] = grs[group] ?? [];
    grs[group].push(prd);
    return grs;
}, {});
console.log(studentsByGroup);


// const colorConfig={
//     red:true,
//     blue:false,
//     green:true,
//     black:true,
//     yellow:false,
// }
// const colors=["pink","red","blue"]
// console.log(colorConfig.colors[1])

console.log("Hello".concat(" World"));
console.log("Hello".concat(" wor","l","d"));
console.log("Hi ".repeat(3))

console.log("-------")


const products = [
    { name: "Bob", group: "NT-79", voted: true },
    { name: "Jake", group: "NT-77", voted: true },
    { name: "Kate", group: "NT-70", voted: false },
    { name: "Sam", group: "NT-77", voted: false },
    { name: "Phil", group: "NT-70", voted: true },
    { name: "Ed", group: "NT-79", voted: true },
    { name: "Tami", group: "NT-77", voted: true },
    { name: "Mary", group: "NT-70", voted: false },
    { name: "Becky", group: "NT-79", voted: false },
    { name: "Joey", group: "NT-70", voted: true },
    { name: "Jeff", group: "NT-79", voted: true },
    { name: "Zack", group: "NT-79", voted: false },
    { name: "Hack", group: "NT-100", voted: true },
    { name: "Hack", group: "NT-100", voted: true },
    { name: "Hack", group: "NT-100", voted: true },
    { name: "Hack", group: "NT-100", voted: true },
  ];

  let result = products.reduce((x, y) => {

      (x[y.group] = x[y.group] || []).push(y);

      return x;

  }, {});

  console.log(result);
