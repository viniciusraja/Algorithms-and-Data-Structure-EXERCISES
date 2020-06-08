// Resistor Networks

// Resistors are electrical components that add resistance to a circuit. Resistance is measured in ohms. When resistors are connected in series, the total resistance is merely the sum of the individual resistances:

// Rtotal = R1 + R2 + R3 + ...

// When resistors are connected in parallel, the reciprocal of the total resistance is equal to the sum of the reciprocals of the individual resistances:

// 1/(Rtotal) = 1/R1 + 1/R2 + 1/R3 + ...

// Let's specify that series resistors be designated by enclosing them in parentheses, and parallel resistors by enclosing them in square brackets. Now we can calculate the equivalent resistance of the network:

//     (2, 3, 6) = 11 ohms
//     [2, 3, 6]= 1 ohm

// Nesting these structures in the same way tuples and arrays are nested allows us to model complex resistor networks.

// Create a function that takes a nested network as a string and returns the equivalent resistance of the network.
//  Round results to the nearest tenth of an ohm.
// Examples

// resist("(10, [20, 30])") ➞ 22.0
// // 10 in series with [20, 30] in parallel.

// resist("[10, (20, 30)]") ➞ 8.3
// // 10 in parallel with (20, 30) in series.

// resist("([10, 20], (30, 40))") ➞ 76.7
// // [10, 20] in parallel in series with (30, 40) in series.

// resist("(1, [12, 4, (1, [10, (2, 8)])])") ➞ 3.0

// resist("(6, [8, (4, [8, (4, [6, (8, [6, (10, 2)])])])])") ➞ 10

function parallel(...R){
    return R.reduce((acc,resistor)=>{
                        return 1/(1/acc+(1/resistor))
                        }).toFixed(1)
}

function series(...R){
    return R.reduce((acc,resistor)=>acc+=resistor).toFixed(1)
}

function findNumbersInString(netString){
    const regex = new RegExp(/[+-]?([0-9]*[.])?[0-9]+/g)
    const arrayOfStringNumbers=netString.match(regex)
    return arrayOfStringNumbers.map((item)=>{
        return Number(item)})

}

function defineNetParallelOrSeries(symbol,resistors){
    switch(symbol){
        case '[':return parallel(...resistors)
        case '(':return series(...resistors)
    }
}
function separateStringExpression(stringResistorNet){
    for(let i=stringResistorNet.length; i>=0; i--){
        if(stringResistorNet.substring(i,i+1)=='('||stringResistorNet.substring(i,i+1)=='['){
                const initialIndexOfExpression=i
                for(let j=initialIndexOfExpression; j<=stringResistorNet.length; j++){
                    if(stringResistorNet.substring(j,j+1)==')'||stringResistorNet.substring(j,j+1)==']'){
                        const finalIndexOfExpression=j+1
                        return {
                            initialPartOfTheExpressionLeftToSolve:stringResistorNet.substring(0,initialIndexOfExpression),
                            finalPartOfTheExpressionLeftToSolve:stringResistorNet.substring(finalIndexOfExpression,stringResistorNet.length),
                            stringToExtractNumbersAndSolve:stringResistorNet.substring(initialIndexOfExpression,finalIndexOfExpression)}
                    }
                }
            }}

        }

function resist(stringResistorNet){
        const {initialPartOfTheExpressionLeftToSolve,
               finalPartOfTheExpressionLeftToSolve,
               stringToExtractNumbersAndSolve}=separateStringExpression(stringResistorNet)
        if(initialPartOfTheExpressionLeftToSolve==''){
                const parallelOrSeriesSymbol=stringToExtractNumbersAndSolve.substring(0,1)
                const arrayOfResistorsToSolve=findNumbersInString(stringToExtractNumbersAndSolve)
                const equivalentResistor=defineNetParallelOrSeries(parallelOrSeriesSymbol,arrayOfResistorsToSolve)
                return equivalentResistor
            }
                const parallelOrSeriesSymbol=stringToExtractNumbersAndSolve.substring(0,1)
                const arrayOfResistorsToSolve=findNumbersInString(stringToExtractNumbersAndSolve)
                const equivalentResistor=defineNetParallelOrSeries(parallelOrSeriesSymbol,arrayOfResistorsToSolve)
                const netLeftTosolve=initialPartOfTheExpressionLeftToSolve+`${equivalentResistor}`+finalPartOfTheExpressionLeftToSolve
                return resist(netLeftTosolve)
}
        
console.log(resist("(6, [8, (4, [8, (4, [6, (8, [6, (10, 2)])])])])"),'-----'
, resist("(1, [12, 4, (1, [10, (2, 8)])])"),'----',
resist("[10, (20, 30)]"),'----',
resist("([10, 20], (30, 40))"))