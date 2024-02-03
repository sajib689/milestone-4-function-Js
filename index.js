const obj = {
    names: null,
    city: undefined,
    age: false,
    country: 0
}

const {
    names= "sumon",
    city= "khulna",
    age= 30,
    country= "Bangladesh"
} = obj;

console.log(age,country);