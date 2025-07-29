function visabilityTester(modifier = 1){
    if (modifier == 1){
        console.log('Код сюда доходит!')
    }
    else if(modifier == 2){
        alert('Код сюда доходит!')
    }
}

export {visabilityTester}