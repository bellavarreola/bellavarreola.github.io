let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));
console.log(subdoman);

fetch('../portfolio/projects.json')
    .then(response => {
        return response.json();
    }).then(projects => {
        proj = projects;
        findProjectsInJSON(projects);
        //parseData(projects);//
    }).catch(err => {
        console.log(`error ${err}`);
    })

//looking for subdomain inside json looping through all projects// 
function findProjectInJSON(projects){
    for(let i=0; i<projects.projects.length; i++){
        if(projects.projects[i].subdomain == subdomain){
            buildPage(projects.projects[i]);               //function to build page based on the array gathered from project //
            break;
        }else{
            continue;
        }
    }
}

function buildPage(project){
    console.log(project);
    document.getElementById("project").innerHTML += `<h1>${project.name}</h1>`;
}
