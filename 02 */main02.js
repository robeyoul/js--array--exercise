
/*

const charCount= (str,char)=>{
     return str.split('').filter((ch)=>ch===char).length
}


const contain2to4= (str,char)=>{
  return charCount(str,char)>=2 &&
  charCount(str,char)<= 4;
}



console.log(contain2to4('ohhhhh','h'));
console.log(contain2to4('ohhhh','h'));




//way 2


function CountChar (str,char){
    
  var arr= str
  var newarr= []
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]==char) {
       newarr.push(arr[i])
    }
    
    
  }
  
   count= newarr.length
  
  
  if (count>=2 && count<=4) {
     console.log(true);
  }else{
     console.log(false);
  }
  
  
}


CountChar('happpppy','p');


*/


