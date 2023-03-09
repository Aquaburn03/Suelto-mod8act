var fnameHTML = document.getElementById("fname");
var genderHTML = document.getElementById("gender");
var usernameHTML = document.getElementById("username");
var descHTML = document.getElementById("desc");
var yearHTML = document.getElementById("year");
var ageHTML = document.getElementById("age");

var fname = prompt("Please enter your full name:");
var username = prompt("Please enter your username:");

if (confirm("What is your gender? \nPress OK if you are Male \nCancel if Female")) {
    alert("Your profile gender is set to MALE");
    var gender = "M";
} else {
    alert("Your profile gender is set to FEMALE");
    var gender = "F";
}

var desc = prompt("Please type a brief description of yourself");
var year = parseInt(prompt("Please enter your Birth Year:"));
var age = 2023 - year;

if (confirm("Do you want to use a custom profile picture?")) {
    var photo = prompt("Please enter the file name of the picture. (Ex: wow.png )\n");
    document.getElementById("ppic").setAttribute("src",photo );
    alert("Profile picture has been updated.");
} else {
    alert("No image has been set.");
}

fnameHTML.innerHTML = fname;
genderHTML.innerHTML = " " + gender;
usernameHTML.innerHTML = username;
descHTML.innerHTML = desc;
yearHTML.innerHTML = year;
ageHTML.innerHTML = age;

console.log("user: " + fname);
console.log("username: " + username);
if (photo != null) {
    console.log("photo: " + photo);
} else {
    console.log("photo: NONE");
}