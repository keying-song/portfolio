"use strict";
(function () {
    function Start() {
        //email validate
        let submit = document.getElementById("submit");
        submit.onclick=function(){
            
             let email = document.getElementById("email");
             let error = document.getElementById();
             error.innerHTML 
       
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