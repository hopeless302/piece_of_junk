const mixArray = [1, 9, -3, -5, 10, 3, 4, -4]

const mixStringNumber = [1, "a", 3, "b", true, 99, 50, "fifty", "ten", false, false]

mixArray.sort((a, b) => a-b)

const num = mixStringNumber.filter(item => typeof item === "number")
const string = mixStringNumber.filter(item => typeof item === "string")
const boolean = mixStringNumber.filter(item => typeof item === "boolean")

console.log(num);
console.log(string);
console.log(boolean);