//Opdracht 1 t/m 8
var name = "Dali";  //String
var surname = "Klaassen";  //String
var age = 17;  //Number
var street_name = "Veldweg";  //String
var city = "Westzaan";  //String
var house_number = 207; //Number
var school_name = "Mediacollege";  //String
var school_street_name = "Contactweg";  //String
var school_number = 36; //Number
var language = "Dutch";  //String
var pets = true;  //Boolean
var work = "Thuisbezorgd"; //String
var education = "Media-Developer";  //String
var smartphone = "Samsung S8+"; //String
var gender = "Man"; //String

console.log(typeof(name));
console.log(typeof(surname));
console.log(typeof(age));
console.log(typeof(street_name));
console.log(typeof(city));
console.log(typeof(house_number));
console.log(typeof(school_name));
console.log(typeof(school_street_name));
console.log(typeof(school_number));
console.log(typeof(language));
console.log(typeof(pets));
console.log(typeof(work));
console.log(typeof(education));
console.log(typeof(smartphone));
console.log(typeof(gender));

var all = (name + surname + age + street_name + city + house_number + school_name + school_street_name + school_number + language + pets + work + education + smartphone + gender);

console.log(all);
console.log(typeof(all));

//Opdracht 9 t/m 14

console.log(name + " " + surname);
console.log(street_name + " " + house_number + ", " + city);

function full_name(){
  fullName = name + " " + surname;
}

function adress() {
  fullAdress = street_name + " " + house_number + ", " + city;
}

full_name();
console.log(fullName);
adress();
console.log(fullAdress);

//Opdracht 11 & 12
(function() {
  werk = smartphone + " " + work;
  kaas = pets + " " + language;
})();
console.log(werk);
console.log(kaas);

//Opdracht 13
function myFunction() {
    var a = 4;
    return a * a;
}
//Opdracht 14
var singer = "Mezelf";
function log(){
  console.log(singer);
  var singer = "Ikzelf";
  console.log(singer);
};
log();

//Opdracht 15
