/*Εδω ορίζω το πρώτο promise που θα κάνει το request, εαν γίνει με επιτυχία , θα εκτελέσει το resolve 
δηλαδή θα εκτελεστεί ότι είναι μέσα σto then . */
var last_={};
var promise = new Promise(function (resolve, reject) {
  const getData_ = fetch(
    "https://api.github.com/repos/angular/angular.js/issues?per_page=10");
  data = getData_.then((response) => {
    window.data = response.json();
    return data;
}); //Εαν πάρει επιτυχώς τα δεδομένα τα περνάει στο resolve
if (data) {
    resolve(data);
} else {
    reject(Error("Error with data"));
}
});

/*Εκτελείτε το promise και απο την συνθήκη περνά τα δεδομένα στο resolve
Με το then, δηλαδή με το που ολοκληρωθεί το promise επιτυχώς περνάμε την 
μεταβλητή result(δηλ data) που έχει περαστεί στο resolve(data). Επιστρέφει 
ενα καινούριο promise που εάν ολοκληρωθεί με επιτυχία περνά στο resolve 
το τελευταίο object. Μόλις ολοκληρωθεί το συγκεκριμένο promise, εκτυπώνει το 
τελευταίο στοιχείο και επιστρέφει ένα νεο promise όπου περνά στο resolve το 
html_url του τελευταίου object. Στη συνέχεια επιστρέφει ένα καινούριο promise 
που κάνει redirect στο συγκεκριμένο url 
Η συγκεκριμένη τεχνική ονομάζεται chainning pattern και χρησιμοποιείται αντί να 
αρχικοποιούμε new promises και στην συνέχεια να τα καλούμε στα then των άλλων 
promises. Δηλαδή στο promise είναι μια υπόσχεση που αν πετύχει εκτελεί το resolve
(δηλαδή θα εκτελεστεί ότι περαστέι στο then )ενω στην αποτυχία του θα εκτελεστεί το 
reject ότι υπάρχει μετά το catch . 
*/
/**
 * 1o then μολίς ολοκληρωθεί επιστρέφει ενα νεο promise που περνά στο resolve
 * το τελευταίο object
 * 2o then, μολις ολοκληρωθεί επιστρέφει ενα νεο promise οπου εαν πετύχει περνά το
 * url του τελευταίου object
 * 3ο then μολις ολοκληρωθεί το προηγούμενο promise καλεί ενα νεο promise οπου στο
 * resolve του περνά το url του τελευταίου object και κάνει redirect σε αυτό 
 */

promise.then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => {
    if (result) 
        resolve(result[result.length - 1]);
    else 
        reject("There was an error");
}).then((last) => {
    window.last_=Object.assign({},last)
    console.log(window.last_);
    return new Promise((resolve, reject) => {
    if (last) {
        resolve(last["url"]);
    } else reject("Error in promise ");
}).then((last_url) => {
      console.log(last_url);
      window.location.href = last_url;
    });
  });
}).catch(err=>console.log(err));