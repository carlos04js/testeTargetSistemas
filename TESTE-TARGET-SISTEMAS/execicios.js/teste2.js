/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/ 

const number = 34

function verifyFibonacci (number){

    let numbers = [0,1]
    while(numbers[1]<number){
        let sum = numbers[0]+numbers[1]
        numbers[0]=numbers[1]
        numbers[1]=sum
    }
    /*do{
        let sum = numbers[0]+numbers[1]
        numbers[0]=numbers[1]
        numbers[1]=sum
    }while(numbers[1]<number)*/
    if(numbers.includes(number))
        return true
    else
        return false
}


function main (){
    if(verifyFibonacci(number))
        console.log("Número pertence a sequencia de fibonacci")
    else
        console.log("Número não pertence a sequencia de fibonacci")
}

main(10)