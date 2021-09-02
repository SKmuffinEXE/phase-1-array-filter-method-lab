// Code your solution here
function findMatching(arr, str ){
      const matches = arr.filter(arr=> arr.toUpperCase() === str.toUpperCase())
      console.log(matches)
    return matches
}

 function fuzzyMatch(arr, str){

    const beginMatch = arr.filter(arr => arr.startsWith(str))    
    
    return beginMatch
    
 }

 function matchName(arr, str ){
    const matchedNames = arr.filter(arr=> {
        return arr.name === str}
        )
    console.log(matchedNames)
  return matchedNames
}

 //don't forget about array indexes
