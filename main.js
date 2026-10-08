
// function that takes number, determine whether it is even or odd.

function determineNum (num) {
    if(num > 0) {
        if(num % 2 == 0){
    console.log("even");

    }
    else {
        console.log("odd"); 
    }
    
    }else {
        console.log("Enter a number greater than 0");
    }

    
}
determineNum(5) //print odd
determineNum(6) //print even

//2- function that takes num1 and num2, print the larger number.

function maxNum(num1 = 0 , num2 = 0){
    if (num1 > num2){
        console.log(num1);

    }
    else if( num2 > num1)
    {
        console.log (num2);

    }
    else {
        console.log(" number1 equel number2 ")
    }

}
maxNum (5 ,3) // 5
maxNum (9,14) // 14
maxNum (9 ,9) // number1 equel number2


 //3- function that takes birth year, calculate age.
 

function calcAge (age ){
    var result = 2026 - age ;
    return result ;
}

var response3 = calcAge(2005);

console.log(response); //2026 - 2005 =21

//4- function that takes number, print the odd number from 1 to the given number.

function printOddnum ( num ){

    for( var i = 1 ; i< num ;i++){
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
printOddnum (16) // 1 3 5 7 9 11 13 15 



// 5- function that number, calculate the sumption from 1 to the given number.

function sumAllNum( number ){
    var sum =0;
    for( var i =1 ; i <= number ; i++){
        
        sum = sum + i ;
       

    } return sum
}

var response5 = sumAllNum(5);
console.log(response5) //1 + 2 + 3 + 4 + 5 = 15
