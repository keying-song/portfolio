"use strict";
(function () {
    function Start() {

        


        console.log("app started!");
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "../data/data.json");
        XHR.send();
        XHR.addEventListener("readystatechange", function () {
            if (XHR.readyState == 4 && XHR.status == 200) {
                console.log("JSON DATE:");
                console.log("==============");
                console.log(XHR.responseText);
            }
        });
    }
    window.addEventListener("load", Start);
})();
//email
function emailValidate(){
    var emailInput = document.getElementById("email").value;
    var error = document.getElementById("error");
    var emailReg =/^\w+@\w+\.\w+.*$/;
    if(! emailReg.test(emailInput)){
    
    error.innerHTML = "invalid email";
  
    }else{
      error.innerHTML = " ";
    }
  
  }
