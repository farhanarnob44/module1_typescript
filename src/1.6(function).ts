// Normal function 
// arrow function

function add(num1 : number, num2 : number){
    return num1+num2;
}

add(2, 2)
console.log(add)

const addArraow = (num1: number, num2:number) : number => num1+num2


// object --> function --> method 

const poorUser = {
    name : 'Farhan',
    balance : 10000000,
    addBanlance(balance: number): string{
        return `My new balance is ${this.balance + balance}`;
    }
}


const arr : number [] = [1,4,10]

const newArray = arr.map((element : number) : number => element*element)