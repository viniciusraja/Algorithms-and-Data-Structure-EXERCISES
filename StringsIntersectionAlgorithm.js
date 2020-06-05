// Create a function that returns the smallest number
// of letter removals so that two strings are anagrams of each other.

// Examples

// minRemovals("abcde", "cab") ➞ 2
// Remove "d", "e" to make "abc" and "cab".

// minRemovals("deafk", "kfeap") ➞ 2
// Remove "d" and "p" from the first and second word, respectively.

//minRemovals("acb", "ghi") ➞ 6
// Remove all letters from both words to get "" and "".

function minRemovals(str1,str2){
    let count=0
    for(let i=0; i<str1.length;i++){
        for(let j=0; j<str2.length; j++){
            if(str1.substring(i,i+1)==str2.substring(j,j+1)){
                count+=1;
            }
        }
}
const numberOfItemsToRemoveInStr1=str1.length-count
const numberOfItemsToRemoveInStr2=str2.length-count
return numberOfItemsToRemoveInStr1+numberOfItemsToRemoveInStr2
}
console.log(minRemovals("deafk", "kfeap"))
console.log(minRemovals("acb", "ghi"))