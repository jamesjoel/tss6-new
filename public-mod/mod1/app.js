let a = require("console-table-printer")

let data = [
    {
        SNo : 1,
        name : "rohit",
        age : 16,
        class : 12
    },
    {
        SNo : 1,
        name : "gaurav",
        age : 12,
        class : 8
    },
    {
        SNo : 3,
        name : "vijay",
        age : 10,
        class : 6
    }
]

// a.printTable(data)

let crfile = require("create-file");

crfile("./myfiles/steppingstone.txt", "Lorem ipsum dolor sit amet \nconsectetur adipisicing elit. Recusandae numquam perferendis \nnon similique odit dolor, veniam quos facilis quidem! Rerum quis doloribus quod \ninventore nisi deleniti esse sit, sint quisquam.", ()=>{

});

/*
    demo(50, 100, ()=>{ })



*/

