hello(goodbye);
function hello(callback)
{
    console.log("Hello");
    callback();
}

function goodbye()
{
    console.log("Bye");
}
console.log("Start");
setTimeout(()=>{
    console.log("Hey")
},2000);
console.log("End");