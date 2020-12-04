function thankYou(event) {
    //event.preventDefault();
    //event.stopPropagation();
              alert("The form was submitted");
              console.log(event.currentTarget);
              console.log(event.target);
              //return false;
              //event.preventDefault();

}

var form = document.querySelector(".forgotpasswordform");
var form2 = document.querySelector(".second");
var button = document.querySelector(".second>button");
button.onclick = function(event) {
    //return false;
}

form?.addEventListener("submit", ala);
form2.addEventListener("submit", ala);
form2.addEventListener("click", function(event)  {
    console.log("click ");
    console.log(event.target);
    console.log(this);
    console.log(event.currentTarget);

})
//form2.addEventListener("click", ala);

function ala(event) {
    console.log("anytghing");
    console.log(event.target);
    console.log(event.currentTarget);
}
