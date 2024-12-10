function renderPhotography(data) {
    const projectsContainer = document.getElementById("projects");

    // Find the "Photography" project
    const photographyProject = data.projects.find(project => project.name === "Photography");

    if (photographyProject) {
        // Create a container for the photography project
        const projectDiv = document.createElement("div");
        projectDiv.className = "row photography";
        projectDiv.id = photographyProject.subtitle;

        // Add project description
        const descriptionHTML = `
            <div class="description">
                <p>${photographyProject.description.join(' ')}</p>
            </div>`;
        projectDiv.innerHTML = descriptionHTML;

        // Create a container for the images
        const imageContainer = document.createElement("div");
        imageContainer.className = "image-container";

        photographyProject.sections.forEach(section => {
            // Check if the section specifies an imageCount
            if (section.imageCount) {
                for (let i = 1; i <= section.imageCount; i++) {
                    const imageHTML = `
                        <div class="image-tile">
                            <img src="./images/Photo/OneDrive_2_12-4-2024/athletics${i}.jpg" alt="${section.title} Image ${i}" class="carousel-image">
                            <h3>${section.title}</h3>
                            <p>${section.photo_description || ''}</p>
                        </div>`;
                    imageContainer.innerHTML += imageHTML;
                }
            }
        });

        // Append the image container to the project container
        projectDiv.appendChild(imageContainer);
        projectsContainer.appendChild(projectDiv);
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
            document.getElementById(proj.projects[i].subtitle).style.display = "flex";
        }
    }else if(button != undefined){
        for(let i=0; i<proj.projects.length; i++){
            if(proj.projects[i].category.includes(button) == true){
                document.getElementById(proj.projects[i].subtitle).style.display = "flex"; //sets display to visible for each row//
            }else{
                document.getElementById(proj.projects[i].subtitle).style.display = "none"; //if category is not included, set equal to none//
            }
        }
    }else{
        console.log("error, button value is undefined");
    }
}

