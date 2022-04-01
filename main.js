//main functions, run all

function main(num){
    num = +num;
    let numHonestyTest = honestyTest(num);
    let numPrimeNumberTest = primeNumberTest(num);
    let numberPireOrEven = primeOrEven(num);
    let primeNumber;
    let evenNumber;
    if(numberPireOrEven){
        evenNumber = "even";
     }
    else{
        primeNumber = "prime";
    }
    if(numHonestyTest === false){
        alert(`Invalid value (${num}) !!!`);
        return;
    }
    if(numPrimeNumberTest === false){
        alert(`Number is not simple but ${evenNumber}!`);
        return;
    }
    else{
        alert(`Your number: ${num} is simple and ${primeNumber}!`);
    }
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
//check prime number

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
// check is prime or is even

function primeOrEven(num){
    if(num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}