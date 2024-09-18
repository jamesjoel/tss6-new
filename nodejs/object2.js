let data = {
    name : "james",
    age : 25,
    city : "indore",
    fee : 5000,
    gender : "male"
}

const {...demo} = data;


data.name = "Amar";
data.age = 30;


console.log(data);
console.log(demo)