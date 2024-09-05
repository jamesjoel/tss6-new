let a = [4, 7, 10, 20, 50, 14];
let [...b] = a;

a[0] = 100;
a[1] = 100;


console.log(a);
console.log(b);