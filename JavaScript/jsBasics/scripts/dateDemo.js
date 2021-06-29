// Question No.1

// function today(date)
//      {  
//  var givenDate  = new Date(date)
// var currentDay = givenDate.getDay();
// var dateIsInWeekend = (currentDay === 6) || (currentDay === 0);
// if(dateIsInWeekend==true){
//    console.log("It is a Weekend Day");
// } else {
//    console.log("It is  Not Weekend Day");
// }
// }

//<----------------------------------------------------------------------------------------->

//Question No.2

// const date1 = new Date('01/11/1998');
// const date2 = new Date('01/28/1999');
// const timeDiffrence = Math.abs(date2 - date1);
// const daysDiffrence = Math.ceil(timeDiffrence / (1000 * 60 * 60 * 24)); 
// console.log(timeDiffrence + " ms");
// console.log(daysDiffrence + " Days");

//<----------------------------------------------------------------------------------------->

//Question No.3

//  functon isItDate(input){
//     if(typeof(input)===["object Date"])
//     { console.log('It is a date') }
//     else
//     { console.log('It is not a date')}
// }

//<----------------------------------------------------------------------------------------->

//Question No.4

// var date1 = new Date();
// var date2 =  date1.toGMTString();
//var diffTime=Math.abs(date2-date1);
//var diffInHours=Math.ceil(diffTime / (1000 * 60 * 60 ));

//<----------------------------------------------------------------------------------------->

//Question No.5 

// function ageCalc(dob) {
//     var myDob = new Date(dob);
//     var today = new Date();
//     var diffInTime = math.abs(today-myDob); 
//     var diffInDays = math.ceil(diffInTime / (1000 * 60 * 60 * 24));
//     var age = Math.floor(diffInDays/365);
//     console.log("My Age =",age);
//}