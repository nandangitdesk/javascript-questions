
const triangleType = (a,b,c)=>{
  
   if (a===b && b===c) {
      return "equilateral"
   }
   if (a===b || b===c || a===c) {
    return "isosecles"
 }
 return "scalene"

}



console.log(triangleType(3,3,3))

console.log(triangleType(3,3,4))

console.log(triangleType(3,5,7))