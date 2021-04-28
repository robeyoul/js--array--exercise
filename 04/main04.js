const largestEvenNum= (arr)=>{
  const even= arr.filter(num=> num%2==0)
  
  return Math.max(...even)
}

console.log(largestEvenNum([1,2,3,4,5,6]));


//way