function disp(a,b,c)
{ 
    var c = c || 10;
    console.log(a + b + c);
}
disp(10,10);

function hello(a,b=1)
{
    console.log(a+b);
}
hello(10);