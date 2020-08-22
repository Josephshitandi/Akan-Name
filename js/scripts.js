var akanMaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", ];
var akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama", ];

function akanName() {
  var gender = document.getElementById("gender").value;
  var ydate = document.getElementById("ydate").value;

  var CC = parseInt(ydate.substr(0, 2));
  var YY = parseInt(ydate.substr(1, 3));
  var MM = parseInt(ydate.substr(5, 6));
  var DD = parseInt(ydate.substr(8, 9))
  var d = parseInt((CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7)

  if (DD <= 0 || DD > 31) {
    alert("Invalid day. Please enter a valid date")
  } else if (MM <= 0 || MM > 12) {
    alert("Invalid Month. Please enter a valid month")
  } else if (gender === "Male") {
    alert("Your Ghanian equivalent name is " + akanMaleNames[d])
  } else if (gender === "Female") {
    alert("Your Ghanian equivalent name is " + akanFemaleNames[d])
  } else
    alert("Invalid gender. Please choose gender")
}