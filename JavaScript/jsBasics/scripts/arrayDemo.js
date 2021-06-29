

//Question No.1

// let arr = [0, 1, false, 2, undefined, '', 3, null];
//   function filterArray(arr) {
//     let output = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i]=="number") {
//         output.push(arr[i]);
//       }
//     }
//     return output;
//   } 
//   console.log(filterArray(arr));

//<------------------------------------------------------------------------------>

// Question No.2

//function withoutThis(values[]){
// let arr = [1, 2, 3, 1, 2]
// arr = arr.filter(item => !values.includes(item))
// console.log(arr);
//}

//<-------------------------------------------------------------------------------->

// Question No.3

//function dupFreeArray(arr[]){
// let dupArr = new Set(arr);
// arr = Array.from(dupArr);
// console.log(arr);
//}

//<---------------------------------------------------------------------------------->

//Question No.4
 
// function splitIntoChunk(arr, chunk) {
//     for (i=0; i < arr.length; i += chunk) {
//         let tempArray;
//         tempArray = arr.slice(i, i + chunk);
//         console.log(tempArray);
//     }
// }
// const array = [1, 2, 3, 4, 5];
// const chunk = 2;
// splitIntoChunk(array, chunk);

//<------------------------------------------------------------------------------->

//Question No.5

// let people = ["Ankur", "Zooav", "Elewiss", "Crossy"];

//a.
//  for(let i=0;i<people.length;i++) {
//    console.log(people[i]);
//   }

//b.
//  people.shift('Ankur');
//  console.log(people)

//c.
// people.pop('Crossy'); 
//  console.log(people);

//d.
// people.unshift('Matt');
// console.log(people);

//e.
// people.push('Prabhu');
// console.log(people);

//f.
//  for (i = 0; i< people.length;  i++) {
//     console.log(people[i]);
//     if(people[i] == "Zooav" ){
//         break;
//     }
//  }

//g.
// let copyArray = people.slice(1,4);
// console.log(copyArray);

//h.
//console.log(people.indexOf('Zooav'));

//i.
//console.log(people.indexOf('Foo'));

//j
// people.splice(2, 1, 'Elizabeth','Artie');
//console.log(people);

//k
//let withBob = people.concat("Bob");
// console.log(withBob);

//<----------------------------------------------------------------------------------->

//Question No.6
// var library = [
//     {​​​​​​author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}​​​​​​,
//     {​​​​​​author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}​​​​​​,
//     {​​​​​​author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}​​​​​​];
 
//    function sortByTitle(a,b) {
//        if(a.title < b.title) {
//            return 'not Sorted'; 
//        }
//        if(a.title > b.title) {
//            return 'sorted';
//        }
//       return 0; 
//    } 
//    console.log(library.sort(sortByTitle));

