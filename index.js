// code your solution here

function saturdayFun(action = "roller-skate"){
    return "This Saturday, I want to " + action + "!" 
}




function mondayWork(argument = "office"){
    if (argument != "office" ){
        return "This Monday, I will work from home."
    } else { 
        return "This Monday, I will go to the office."
    }
}


function wrapAdjective(parOuter = "*" ){
    return function(parInner = "special"){
        return "You are " + parOuter + parInner + parOuter +"!"
    }
}

// console.log(wrapAdjective("%")("a dedicated programmer"))