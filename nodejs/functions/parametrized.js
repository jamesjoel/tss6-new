// function gst(p, s)
// {
//     // let p = 50000;
//     // let s = 8;
//     let x = p*s/100;
//     let y = x+p;

//     console.log(y);
// }

// gst(10000, 8);
// gst(12000, 5);
// gst(18000, 18);
// gst(6000, 28);




function gst(price=1000, slab=1)
{
    let ans;
    switch(slab)
    {
        case 1 : ans = price+(price*5/100);
                break;
        case 2 : ans = price+(price*12/100);
                break;
        case 3 : ans = price+(price*18/100);
                break;
        case 4 : ans = price+(price*28/100);
                break;
    
    }
    // console.log(ans)
    return ans;
}
let x = gst(25000, 4);
console.log(x)


// gst(40000, 4)
// gst(10000)
// gst();