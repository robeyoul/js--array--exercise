function reverseNumber(num){
   
   num= num+ ''
   
   return num.split('').reverse().join('')
   
}

console.log(reverseNumber(54321))


/* 
use of split, reverse and join

split: create an array from string

reverse: reverse an array

join: convert an array to string
*/


var n= 50320
n= n+''
var split= n.split('')

console.log(split);

var reverse= split.reverse()
console.log(reverse);

var join= reverse.join('')
console.log(join);


function reverseName(name){
   
   return name.split('').reverse().join('')              
   
}

console.log(reverseName('Robeyoul'));