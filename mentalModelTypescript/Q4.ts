// 1. You have an array that contains mixed data types: 
// `(string | number)[]`. Write a function called `separateTypes` 
// that takes this mixed array and returns an object with two 
// properties:
//     - `strings`: an array containing only the string values
//     - `numbers`: an array containing only the number values
    
//     Use proper type guards to check the types. 
    
//     For example, if given `[1, "hello", 2, "world", 3]`, it 
// should return `{ strings: ["hello", "world"], numbers: [1, 2, 3] }`.
export
//let array :(string | number)[]
function separateTypes(Array:(string | number)[]) {
    let strings :(string)[]=[]
    let numbers :(number)[]=[]
    for (let el of Array) {
        if (typeof el === "string") {
            strings.push(el)
        }else{
            numbers.push(el)
        }
        
    }
    return console.log ({ strings, numbers })
} 
separateTypes([1, "hello", 2, "world", 3])