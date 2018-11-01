function delayedResolve(time){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("resolved in " + time);
        }, time);
    });
}

function delayedReject(time){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            reject("rejected in " + time);
        }, time);
    });
}

var promise1 = delayedResolve(5000);
var promise2 = delayedReject(2000);
var promise3 = delayedResolve(1000);

Promise.race([promise2, promise3, promise1]).then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
});

Promise.all([promise1, promise2, promise3]).then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
})

Promise.all([promise1, promise3]).then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
})