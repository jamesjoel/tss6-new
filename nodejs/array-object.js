let x = [100, 200, ["rohit", "vijay"]];


let arr = [4, 12, 7, 6, x];

// console.log(arr[4][2][1])


let obj = {
    name : "rohit",
    age : 25,
    city : "indore",
    data : {
        a : "red",
        b : "blue",
        c : {
            x : "mumbai"
        }
    }
}


// console.log(obj.data.c.x)


let user = {
    data : [100, 200]
}

// console.log(user.data[1])

let info = [100, 200, 500, {
    x : "Delhi",
    y : "Pune"
}];

console.log(info[3].y)
