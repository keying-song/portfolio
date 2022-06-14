"use strict";
(function () {
    function Start() {
        //email validate
        let submit = document.getElementById("submit");
        let reset = document.getElementById("reset");
        submit.onclick=function(){
             let error = document.getElementById("error");
             let emailInput = document.getElementById("email").value;
             let emailReg =/^+@\w+\.\w+.*$/;
             if(! emailReg.test(emailInput)){
               error.innerHTML ="Email Address is invalid";
       
             }else{
                error.innerHTML ="";
             }

           
           
        }
       



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
//# sourceMappingURL=app.js.map
