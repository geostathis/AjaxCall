

/*Εδω ορίζω το πρώτο promise που θα κάνει το request, εαν γίνει με επιτυχία , θα εκτελέσει το resolve 
δηλαδή θα εκτελεστεί ότι είναι μέσα σto then . */
var promise =new Promise(function (resolve,reject){
    const getData_=fetch("https://api.github.com/repos/angular/angular.js/issues?per_page=10");
    data=getData_.then(response=>{
    window.data=response.json();
    return data;
});
    if (data){
        resolve(data);
    }else{
        reject(Error("Error"));
    }
});
promise.then(function(result){
    console.log(result);
}).catch(function (err){
    console.log(err);
})

var last={};
//Το promise2 το οποίο στην ουσία εκτελεί το promise 1
var promise2=new Promise(function(resolve,reject){
    var p=promise;
    if (p){
        resolve(p);
    }else{
        reject(Error("Error"));
    }
})
promise2.then(function(p){
    var last=p[9]
    document.getElementById("myObject").innerHTML="To html_url είναι: "+last['html_url'];
  //  window.location.href = "www.google.com";
}).catch(function (err){
    console.log(err);
})

