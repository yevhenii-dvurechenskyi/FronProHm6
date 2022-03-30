//main functions, run all

function main(num){
    num = +num;
    let numHonestyTest = honestyTest(num);
    let numPrimeNumberTest = primeNumberTest(num);
    if(numHonestyTest === false){
        alert(`Invalid value (${num}) !!!`);
        breake;
    }
    if(numPrimeNumberTest === false){
        alert(`Number is not simple!`);
        //error with breake(Uncaught ReferenceError: breake is not defined), i dont know why, but the program works well
        breake;
    }
    alert(`Your number: ${num} is simple!`);
} 

//check number

function honestyTest(num){
    if(num !== Number(num) || num === NaN){
        return  false;
    }
    else{
        return  true;
    }
}
////check prime number

function primeNumberTest(num){
    if(num <= 2 || Number.isInteger(num) === false){
        return false;
    }
    else{
        for(let i = 2; i < num; i++){
            let number = num % i;
            if(number === 0){
                return false;
            }
            else{
                if(i+1 === num){
                    return true;
                }
            }
        }
    }
    
}