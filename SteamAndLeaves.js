// Stems and Leaves

// In statistics a stem-and-leaf plot is a graphical representation of values distribution in a dataset,
// usually implemented for a small set of values. In this exercise we'll build a simple plot for positive
//  integer values following the steps below.

// 1) You must separate each value in two parts: the stem, equal to all number digits but last and the leaf, 
// equal to the last digit. For numbers in range 0-9 you must add a "0" at the start. Examples:

//     4872: stem is "487", leaf is "2".
//     429: stem is "42", leaf is "9".
//     85: stem is "8", leaf is "5".
//     1: stem is "0", leaf is "1".

// 2) Insert in the plot the stems without duplicate values in ascending order, and for every stem every proper
//  leaf in ascending order. Examples for a dataset containing 22, 22, 13, 11, 11:

//     Stems are 1 and 2 (no duplicates in ascending order).
//     Leaves for stem 1 are 1, 1 and 3 (every leaf in ascending order), leaves for stem 2 are 2 and 2.

// Given an array of positive integers you must return the stem-and-leaf plot as an array of strings, one for each stem: strings have to be formatted with stem and leaves separated by " I " (spaces included) and leaves in ascending order separated by a space between them.
// Examples

// stemPlot([111, 11, 1]) ➞ ["0 | 1", "1 | 1", "11 | 1"]

// stemPlot([4, 8, 75]) ➞ ["0 | 4 8", "7 | 5"]

// stemPlot([22, 22, 38, 22, 19]) ➞ ["1 | 9", "2 | 2 2 2", "3 | 8"]

function createAnArrayOfTheDigtsOfANumber(number){
    return number.toString().split('')
}
function getTheLastItemOfAnArray(array){
    return array.pop()
}

function deleteTheLastItemOfAnArray(array){
    return array.slice(0,-1)
}

function stemPlot(array){
    const stemArray=[]
    const leafsArray=[]
    const separetedDigitsArray= array.map((element, index) => {
        return createAnArrayOfTheDigtsOfANumber(element)
    });
    separetedDigitsArray.forEach((element,index)=>{
        let stem='0';
        let leaf;
        if(element.length>1){
                stem=deleteTheLastItemOfAnArray(element);
                leaf=getTheLastItemOfAnArray(element)
                stem=stem.join('')
        }else{
            leaf=element[0]    
        }
        let indexOfStemAndLeafInArray=stemArray.indexOf(stem)
        if(indexOfStemAndLeafInArray==-1){
                stemArray.push(stem)
                leafsArray.push([leaf])
        }else{
                leafsArray[indexOfStemAndLeafInArray].push(leaf)
        }
        
    })
    const stemLeafsArray=stemArray.map((item,index)=>{
        let leafsJoined=leafsArray[index].sort((a,b)=>a-b).join(' ')
                let stemLeafItemEdit=item+' | '+leafsJoined
                return stemLeafItemEdit
                
            })
          return stemLeafsArray.sort((a,b)=> {
                return a.split('|')[0] - b.split('|')[0];
            });
}


console.log(stemPlot([4, 8, 75, 7666, 45,3,22,46,49,47,48]),stemPlot([22, 22, 38, 22, 19])) 