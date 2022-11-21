
function logOne()
{
        setTimeout((console.log("One"), Math.random()* 10000));

}

function logTwo()
{
    setTimeout((console.log("Two"), Math.random()* 10));

}
function inOrder(logOne,logTwo)
{
    let promise=new Promise((resolve)=>{
       resolve(logOne);
      
    });
    promise.then(()=>{
        logTwo;
    })
}
inOrder(logOne(), logTwo());


