let counter = require("count-files");
let crfile = require("create-file");

counter("./myfiles", (a, result)=>{
    let n = result.files;
    let s = result.bytes;

    if(s==0)
    {
        crfile("./myfiles/steppingstone1.txt", "Lorem ipsum dolor sit amet \nconsectetur adipisicing elit. Recusandae numquam perferendis \nnon similique odit dolor, veniam quos facilis quidem! Rerum quis doloribus quod \ninventore nisi deleniti esse sit, sint quisquam.", ()=>{

        });
    }
    else{
        if(n==1){
            crfile("./myfiles/steppingstone2.txt", "Lorem ipsum dolor sit amet \nconsectetur adipisicing elit. Recusandae numquam perferendis \nnon similique odit dolor, veniam quos facilis quidem! Rerum quis doloribus quod \ninventore nisi deleniti esse sit, sint quisquam.", ()=>{

            });
        }
        else{
            crfile("./myfiles/steppingstone"+(n+1)+".txt", "Lorem ipsum dolor sit amet \nconsectetur adipisicing elit. Recusandae numquam perferendis \nnon similique odit dolor, veniam quos facilis quidem! Rerum quis doloribus quod \ninventore nisi deleniti esse sit, sint quisquam.", ()=>{

            });
        }
    }

})