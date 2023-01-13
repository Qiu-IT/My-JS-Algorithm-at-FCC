 function palindrome(str) {

    

  str = str.replace(/\s*/g,"");
  str = str.toLowerCase();
  str = str.replace(/[_]/g,"");
  let paliRegex = /\w/g;
  let arrStr1 = str.match(paliRegex);
  // let paliLength = arrStr1.length;
  
  let newStr1 = arrStr1.toString();
newStr1 = newStr1.replace(/[,]/g,"");

  let newStr2="";

 // newStr1=String(newStr1);

  for (let i=newStr1.length-1; i>=0; i--) {
      
      newStr2 += newStr1[i];
     }

if (newStr1==newStr2){
    return true;

}

else {

  return false;

}


 

 
  
  
  
}

var result=palindrome("eye");

console.log(result);

var str ="five|\_/|four";
str = str.toLowerCase();
str = str.replace(/[_]/g,"");
let paliRegex = /\w/gi;
let arrStr1 = str.match(paliRegex);
let paliLength = arrStr1.length;

let newStr1 = arrStr1.toString();
newStr1 = newStr1.replace(/[,]/g,"");

let newStr2="";
newStr1=String(newStr1);

  for (let i=newStr1.length-1; i>=0; i--) {
      
      newStr2 += newStr1[i];
  
   }

if (newStr2===newStr1) {

  console.log(true);
}

else {

console.log(false);


}
console.log(arrStr1);
console.log(newStr1);



console.log(newStr2);


