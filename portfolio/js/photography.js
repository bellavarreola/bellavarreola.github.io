let proj;
fetch('../portfolio/projects.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); 
        proj = projects; 
        renderProjects(data); // Render only the photography project initially
    })
    .catch(err => {
        console.error(`Error fetching JSON: ${err}`);
    })

function renderProjects(data) {
    const projectsContainer = document.getElementById("projects");
    projectsContainer.innerHTML = ''; 

    // Find the "Photography" project
    const photographyProject = data.projects.find(project => project.name === "Photography");

    if (photographyProject) {
        const projectDiv = document.createElement("div");
        projectDiv.className = "row photo";
        projectDiv.id = photographyProject.subtitle;
        const descriptionHTML = `<div class="description"><p>${photographyProject.description.join(' ')}</p></div>`;
        projectDiv.innerHTML = descriptionHTML;

        if (photographyProject.sections) {
            const photoContainer = document.createElement("div");
            photoContainer.className = "photo-tiles";

            photographyProject.sections.forEach(section => {
                if (section.images && section.images.length > 0) {
                    const sectionTitle = document.createElement("h2");
                    sectionTitle.textContent = section.title;
                    photoContainer.appendChild(sectionTitle);

                    section.images.forEach(image => {
                        const photoHTML = `
                            <div class="photo-tile">
                                <img src="${image.src}" alt="${image.title}">
                                <h3>${image.title}</h3>
                                <p>${image.description}</p>
                            </div>`;
                        photoContainer.innerHTML += photoHTML;
                    });
                }
            });

            projectDiv.appendChild(photoContainer);
        }

        projectsContainer.appendChild(projectDiv);
    }
}


