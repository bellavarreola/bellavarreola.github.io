console.log("hellow world");
alert("this is an alert");

let myv_var = 100;
var my_other_var = "hello world";
const this_is_a_constant = "constant";
console.log(my_other_var);
my_other_var += "!"
alert(my_other_var);

// how to interact with the DOM //
console.log(document.getElementById("my_head"))
document.getElementById("my_head").addEventListener("click", function(e){
    alert("clicked the h1");
    document.getElementById("paragraph").innerHTML = "this is a paragraph"
    document.getElementById("paragraph").style.color = "blue"
    document.getElementById("image").src = "../img/was/mbappe.jpg";
})

console.log(document.getElementById("my_head").innerHTML)

// mouseenter, mouseleave, click, mousemove for listeners //
