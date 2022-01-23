const string = `String cannot represent value: ["email required", "password required"]`
let found = false
let result = ""
for (let i in string){
  if(string[i] === "[") found = true
  if(found) result += string[i]
}
console.log(JSON.parse(result));