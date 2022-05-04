function oneThroughTwenty(){
    let mensagem1 = []

for(let cont1 = 1 ; cont1 <= 20 ; cont1++ ){
    mensagem1.push (cont1)
    }

    return mensagem1

}

function evensToTwenty(){
    let mensagem2 = []

    for(let cont2 = 1 ; cont2 <= 20 ; cont2++){
        mensagem2.push (cont2)
        if (cont2 % 2 == 0){
            console.log(cont2)
        }
    }

    return mensagem2
}

function oddsToTwenty(){
    let mensagem3 = []

    for(let cont3 = 1 ; cont3 <= 20 ; cont3++){
        mensagem3.push (cont3)
        if (cont3 % 2 == 1)
        console.log(cont3)
    }

    return mensagem3
}

function multiplesOfFive(){
    let mensagem4 = []

    for(let cont4 = 5 ; cont4 <= 100 ; cont4++){
        mensagem4.push (cont4)
        if (cont4 % 5 == 0)
        console.log(cont4)
    }

    return mensagem4
}

function squareNumbers(){
    let mensagem5 = []

    for(let cont5 = 1 ; cont5 <= 10 ; cont5++){
    mensagem5.push(cont5 * cont5)
    
    }

    return mensagem5
}

function countingBackwards(){
    let mensagem6 = []

    for(let cont6 = 20 ; cont6 > 0 ; cont6--){
    mensagem6.push(cont6)
    }   

    return mensagem6
}

function evenNumbersBackwards(){
    let mensagem7 = []

    for(let cont7 = 20 ; cont7 > 0 ; cont7--){
        mensagem7.push(cont7)
        if (cont7 % 2 == 0)
        console.log(cont7)
    }

    return mensagem7
}

function oddNumbersBackwards(){
    let mensagem8 = []

    for(cont8 = 20 ; cont8 > 0 ; cont8--){
    mensagem8.push(cont8)
    if(cont8 % 2 == 1)
    console.log(cont8)
    }

    return mensagem8
}

function multiplesOfFiveBackwards(){
    let mensagem9 = []

    for(let cont9 = 100 ; cont9 > 0 ; cont9--){
        mensagem9.push(cont9)
        if(cont9 % 5 == 0)
        console.log(cont9)
    }

    return mensagem9
}

function squareNumbersBackwards(){
    let mensagem10 = []

    for(let cont10 = 20 ; cont10 > 0 ; cont10--){
        mensagem10.push(cont10)
        if(cont10 % 1 === 0 )
        console.log(cont10)
    }

    return mensagem10
}

function squareNumbersBackwards(){
    let mensagem11 = []

    for(let cont11 = 10 ; cont11 > 0 ; cont11--){
        mensagem11.push(cont11 * cont11)
    }

    return mensagem11
}