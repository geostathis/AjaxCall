var last={};
/*Εδω ορίζω το πρώτο promise που θα κάνει το request, εαν γίνει με επιτυχία , θα εκτελέσει το resolve 
δηλαδή θα εκτελεστεί ότι είναι μέσα σto then . */
var promise =new Promise(function (resolve,reject){
    const getData_=fetch("https://api.github.com/repos/angular/angular.js/issues?per_page=10");
    data=getData_.then(response=>{
    window.data=response.json();
    return data;
    });
    if (data)
        resolve(data);
    else
        reject(Error("Error"));
    });
promise.then(function(result){
    return result;
}).catch(function (err){
    console.log(err);
})

//Το promise2 το οποίο στην ουσία εκτελεί το promise 1
var promise2=new Promise(function(resolve,reject){
    var p=promise;
    if (p)
        resolve(p);
    else{
        reject(Error("Error"));
    }
})
promise2.then(function(p){
    var last=Object.assign({},p[p.length-1]);
    console.log(last);
    document.getElementById("myObject").innerHTML="To html_url είναι: "+last['html_url'];
    //window.location.href=last['html_url'];
    return last;
    
}).catch(function (err){
    console.log(err);
})

// var promise3=new Promise(function(resolve,reject){
//     var p=promise3;
//     if (p)
//         resolve(p);
//     else
//         reject(Error("Error"));
//   //  console.log(p);
// });
// promise3.then(function (last){console.log(last);}).catch(function (err){
//     console.log(err);
// })


