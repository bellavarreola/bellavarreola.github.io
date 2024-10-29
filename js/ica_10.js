console.log("trick or treat");
alert("HAPPY HALLOWEEN");

let my_var = 100;
var my_var2 = "trick or treat";
const this_is_a_constant = "constant";
console.log(my_var2);
my_var2 += "!"
alert(my_var2);

// ghost animation //
console.log(document.getElementById("ghost_talk"))
document.getElementById("ghost_talk").addEventListener("mouseenter", function(e){
    alert("you scared the ghost");
    document.getElementById("ghost_talk").innerHTML = "You scared me! I'm gone!"
    document.getElementById("ghost_talk").style.color = "black"
    document.getElementById("image").src = "../img/black.jpg";
})

console.log(document.getElementById("ghost_talk").innerHTML)

// mouseenter, mouseleave, click, mousemove for listeners //

// title animation //
console.log(document.getElementById("title"))
document.getElementById("title").addEventListener("click", function(e){
    alert("the ghost is mad");
    document.getElementById("title").innerHTML = "BOOOOOOOOOOOOOOOO"
    document.getElementById("title").style.color = "orange"
})

console.log(document.getElementById("title").innerHTML)