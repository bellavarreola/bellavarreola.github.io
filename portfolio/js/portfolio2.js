let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/") + 1, window.location.href.lastIndexOf("."));
console.log(subdomain);

fetch('../portfolio/projects.json')
  .then(response => {
    return response.json();
  })
  .then(projects => {
    findProjectInJSON(projects);
  })
  .catch(err => {
    console.log(`error ${err}`);
  });

// Looking for subdomain inside JSON, looping through all projects
function findProjectInJSON(projects) {
  for (let i = 0; i < projects.projects.length; i++) {
    if (projects.projects[i].subdomain == subdomain) {
      buildPage(projects.projects[i]); // Function to build page based on the array gathered from project
      break;
    } else {
      continue;
    }
  }
}

function buildPage(project) {
  console.log(project);
  document.getElementById("project").innerHTML += `<h1>${project.name}</h1>`;
  parseData(project); // Add this line to parse data for videos
}


