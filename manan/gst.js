function gst(price, slab)
{
    let per = 0;
    if(slab==1)
    {
        per=5;
    }
    if(slab==2)
    {
        per=8;
    }
    if(slab==3)
    {
        per=18;
    }
    if(slab==4)
    {
        per=28;
    }

    let mrp = price + (price*per/100);
    console.log(mrp)
}

gst(1000, 3)

/*
    let         var         

    let a = 5;                var a = 5;
    a = 10;                var a = 10;


*/