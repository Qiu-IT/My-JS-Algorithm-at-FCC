function convertToRoman(num) {

var numStr = num.toString();
let numStrLength = numStr.length;

console.log(numStrLength);

switch (numStrLength)

{
case 1: var numStrX="000"+numStr;
break;
case 2: var numStrX="00"+numStr;
break;
case 3: var numStrX="0"+numStr;
break;
case 4: var numStrX = numStr;
break;
}

var numR1="";
var numR2="";
var numR3="";
var numR4="";



    let numT=numStrX[3];
        if(numT==0) {
        numR1 ="";
    }
    else if (numT>=1 && numT<4 ) {
      for (let i=0;i<numStrX[3];i++) {
            numR1 = numR1 + "I";
      }
        // return numR1;
    }
    else if(numT==4) {
        numR1 = numR1 + "IV"
        // return numR1;
    }

    else if(numT==5) {
        numR1 = numR1 + "V"
        // return numR1;
    }

    else if (numT>5 && numT<9 ) {
      var numR1="V";
      for (let i=0;i<numStrX[3]-5;i++) {
            numR1 = numR1 + "I";
      }
        // return numR1;
    }

     else if (numT==9) {
      {
            numR1 = "IX";
      }
        // return numR1;
    }


        // Trennung------------------------------

 let numT2=numStrX[2];
        if(numT2==0) {
        numR2 ="";
        // return numR2;
    }
    else if (numT2>=1 && numT2<4 ) {
      for (let i=0;i<numStrX[2];i++) {
            numR2 = numR2 + "X";
      }
        // return numR2;
    }
    else if(numT2==4) {
        numR2 = numR2 + "XL"
        // return numR2;
    }

    else if(numT2==5) {
        numR2 = numR2 + "L"
        // return numR2;
    }

    else if (numT2>5 && numT2<9 ) {
      var numR2="L";
      for (let i=0;i<numStrX[2]-5;i++) {
            numR2 = numR2 + "X";
      }
        // return numR2;
    }

     else if (numT2==9) {
      {
            numR2 = "XC";
      }
        // return numR2;
    }

    // Trennung --------------------------

     let numT3=numStrX[1];
        if(numT3==0) {
        numR3 ="";
        // return numR3;
    }
    else if (numT3>=1 && numT3<4 ) {
      for (let i=0;i<numStrX[1];i++) {
            numR3 = numR3 + "C";
      }
        // return numR3;
    }
    else if(numT3==4) {
        numR3 = numR3 + "CD"
        // return numR3;
    }

    else if(numT3==5) {
        numR3 = numR3 + "D"
        // return numR3;
    }

    else if (numT3>5 && numT3<9 ) {
      var numR3="D";
      for (let i=0;i<numStrX[1]-5;i++) {
            numR3 = numR3 + "C";
      }
        // return numR3;
    }

     else if (numT3==9) {
      {
            numR3 = "CM";
      }
        // return numR3;
    }

  // Trennung --------------------------
let numT4=numStrX[0];
        if(numT4==0) {
        numR4 ="";
        // return numR4;
    }
    else if (numT4>=1 && numT4<6 ) {
      for (let i=0;i<numStrX[0];i++) {
            numR4 = numR4 + "M";
      }
        // return numR4;
   
    }

    else {

      return "Too Big!";
    }

 let numR = numR4+ numR3 + numR2 + numR1;

 return numR;
}

var result=convertToRoman(6041);

console.log(result);
