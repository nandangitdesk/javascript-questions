const Numbers = [1,2,3,2,3,1,4,3,5]
const count = {}

for(let element of Numbers){
  count[element]=(count[element] || 0)+1
}
console.log(count)