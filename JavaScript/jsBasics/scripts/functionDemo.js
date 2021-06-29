//Question No.1

// function primeNumber() {
              
//     var num, i, flag = true;
      
//     num = document.myform.num.value;
//     num = parseInt(num)
//     for(i = 2; i <= num - 1; i++)
//         if (num % i == 0) {
//             flag = false;
//             break;
//         }          
//     if (flag == true)
//         console.log(num + " is prime");
//     else
//         console.log(num + " is not prime");
// }

//<----------------------------------------------------------------------------------------->

//Question No.2


//<----------------------------------------------------------------------------------------->


//Question No.3

// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//        }
//     }
//     return longestWord;
//   }

//Question 4

// function evenOddNumbers(minValue,maxValue) {
//     let totalEven=0;
//     let totalOdd=0;
//         for(let i=minValue;i<=maxValue;i++) {
//             if(i%2==0) {
//                 totalEven++;
//                 console.log("Even Number = ",i);
//             }
//             else {
//                 totalOdd++;
//                 console.log("Odd Number = ",i);
//             }
//         }
//         console.log("Total Even Numbers =",totalEven);
//         console.log("Total Odd Numbers =",totalOdd);
//     }