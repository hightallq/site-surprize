let menu =document.getElementById("icon");

let aside =document.querySelector("aside");

menu.onclick = function () {
    this.classList.toggle("active");
    aside.classList.toggle("active");
}
