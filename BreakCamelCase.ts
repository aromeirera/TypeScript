// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
export
function solution(string:string): string {
  if (string===""){
    return "";
  }
  let result:string = ""
  let rege = /[A-Z]/
  let word = string.split("")
  for ( let el of word){
    if (rege.test(el)){
      result += " "+el   
    }else{
      result +=el
    }
    }
  return result
}
console.log(solution("camelCasing"))
console.log(solution("identifier"))
console.log(solution(""))