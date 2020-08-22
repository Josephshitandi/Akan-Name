var akanMaleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",];
  var akanFemaleNames = ["Akosua","Adwoa","Abena","Akua","Yaa","Afua","Ama",];
  function akanName(){
      var gender = document.getElementById("gender").value;
      var ydate = document.getElementById("ydate").value;

      var CC = parseInt(ydate.substr(0, 2));
      var YY = parseInt(ydate.substr(1, 3));
      var MM = parseInt(ydate.substr(5, 6));
      var DD = parseInt(ydate.substr(8, 9))
      alert(DD)
  }
 
  