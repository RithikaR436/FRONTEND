// 1.ARMSTRONG NUMBER
//  let num=153;
//  let orignal=num;
//  let numofdigits=String(num).length;
//  let sum=0;
//  while (num>0) {
//     let digit=num%10;
//     sum+=Math.pow(digit,numofdigits);
//     num=Math.floor(num/10);    
//  }
//  if(sum===orignal){
//     console.log(orignal+"is an Armstrong Number");
//  }else{
//     console.log(orignal+"is  Not an Armstrong Number");
    
//  }


// 2.ARRAY FILTER
// let numbers=[1,2,3,4,5,6,7,8,,9,10];
// let evenNumbers=[];
// for(let i=0;i<numbers.length;i++){
//    if(numbers[i]%2==0){
//       evenNumbers.push ( numbers[i]);
//    }
// }
// console.log(evenNumbers);



// 3.Palindrome
// let str = " DAD";
// let start = 0;
// let end = str.length - 1;
// let isPalindrome = true;  

// while (start < end) {
//   if (str[start] !== str[end]) {
//     isPalindrome = false;   
//     break;                 
//   }
//   start++;   
//   end--;    
// }

// if (isPalindrome) {
//   console.log(str + " is a Palindrome");
// } else {
//   console.log(str + " is NOT a Palindrome");
// }


// 4.FIZZBUZZ PROBLEM
// for (let num = 1; num <= 100; num++) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log("FIZZBUZZ");   
//     } else if (num % 3 === 0) {
//         console.log("FIZZ");     
//     } else if (num % 5 === 0) {
//         console.log("BUZZ");      
//     } else {
//         console.log(num);        
//     }
// }


// 5.SECOND LARGEST
// let numbers = [10, 5, 20, 8, 20, 15];

// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         secondLargest = largest;      
//         largest = numbers[i];          
//     } else if (numbers[i] > secondLargest && numbers[i] < largest) {
//         secondLargest = numbers[i];    
//     }
// }

// console.log("Largest: " + largest);
// console.log("Second Largest: " + secondLargest);



// 6.vowels
// let sentence = "Hello World";
// let vowels = "aeiouAEIOU";
// let count = 0;

// for (let i = 0; i < sentence.length; i++) {
//     if (vowels.includes(sentence[i])) {
//         count++;
//     }
// }

// console.log("Total vowels: " + count);




// 7.SWAP
// let a = 5;
// let b = 10;
// a = a + b;   
// b = a - b;   
// a = a - b;
// console.log("a="+a,"b="+b);



// 8.Duplicate
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// const numbers = [1, 2, 2, 3, 4, 4, 5, 1];
// console.log(removeDuplicates(numbers)); 



function twoSum(arr, target) {
    let map = new Map(); 
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i]; 
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(arr[i], i);
    }

    return []; 
}

console.log(twoSum([2, 7, 11, 15], 9)); 
console.log(twoSum([3, 2, 4], 6));     
console.log(twoSum([3, 3], 6));         