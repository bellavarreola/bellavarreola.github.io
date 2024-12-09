let proj;
fetch('../portfolio/projects.json')
    .then(response => {
        return response.json();
    }).then(projects => {
        console.log(projects);
        proj = projects;
        parseData(projects);
    }).catch(err => {
        console.log(`error ${err}`);
    })

function parseData(data){ //to return "name" from JSON//
    for(let i=0; i<data.projects.length; i++){
    document.getElementById("projects").innerHTML += `
        <a href="/portfolio/${data.projects[i].name}.html">
            <div class="tile ${data.projects[i].subtitle}" id="${data.projects[i].name}">
                <div class="projimg">
                    <img src="/portfolio/images/cover/cover${i +1}.jpg" alt="${data.projects[i].name}">
                </div>
        <div class="title">
        <h2>${data.projects[i].name}</h2> 
        </p></div></div>`;
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
