let proj;
fetch('/portfolio/projects.json')
    .then(response => {
        return response.json();
    }).then(projects => {
        console.log(projects);
        proj = projects;
        parseData(projects);
    }).catch(err => {
        console.log(`error ${err}`);
    })

function parseData(data){
    for(let i=0; i<data.projects.length; i++){
    document.getElementById("projects").innerHTML += `<a href="/portfolio/${data.projects[i].subdomain}.html">
    <div class="row project" id="${data.projects[i].subdomain}">
        <div class="projimg"><img src="/img/wa11/pic${i +1}.jpeg"></div>
        <div class="description"><h2>${data.projects[i].name}<h2><p class="subtitle">${data.projects[i].subtitle}</p>
        <p>${data.projects[i].abstract}</p></div></div></a>`;
    }
}

for(button of document.querySelectorAll("#buttons button")){ //loops through buttons in node list//
    button.addEventListener("click", e=> { //event listener: when each button is pressed, return its value from teh HTML//
        console.log(e.target.value);
        sortProjects(e.target.value); //create a function//
    })
} 

function sortProjects(button){ //allows us to press button to sort projects based on category description in json//
    if(button == "clear"){
        for(i=0; i<proj.projects.length; i++){
            document.getElementById(proj.projects[i].subdomain).style.display = "flex";
        }
    }else if(button != undefined){
        for(let i=0; i<proj.projects.length; i++){
            if(proj.projects[i].category.includes(button) == true){
                document.getElementById(proj.projects[i].subdomain).style.display = "flex"; //sets display to visible for each row//
            }else{
                document.getElementById(proj.projects[i].subdomain).style.display = "none"; //if category is not included, set equal to none//
            }
        }
    }else{
        console.log("error, button value is undefined");
    }
}