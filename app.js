var user = "ahmed"
if (user == "ahmed") {
    console.log('Welcome')
}
else{
    console.log('bye')
}

var campus ="Escuela"
var time = "11 to 1"

if ((campus == "Escuela" || campus == "escuela") && time == "11 to 1") {
    if (time == "11 to 1") {
        console.log("He is Allowed")
    }
} else {
    console.log("Not Allowed")
}

var arr = ['ahmed', 'faizan']
arr.push('mumtaz', 'Ali')
var pop = arr.pop()
var shift = arr.shift()
arr.splice(2,1,'sufyan','Javed')

console.log(shift)
console.log(pop)
console.log(arr)


for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
    
}
