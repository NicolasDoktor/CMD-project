
document.addEventListener("DOMContentLoaded", function () {

    
    var formular = document.querySelector("form");
    var input = document.querySelector("input");
    var output = document.getElementById("outputShell");

    
    formular.addEventListener("submit", function (e) {
        e.preventDefault();

        
        var prikaz = input.value.trim().toLowerCase();

       
        if (prikaz === "moon") {
            document.getElementById("moon").style.display = "block";
            output.innerHTML += "<p>> Přidal jsi měsíc na oběžnou dráhu</p>";
        } else {
            output.innerHTML += "<p>> Neznámý příkaz: " + prikaz + "</p>";
        }

        
        input.value = "";
    });

});