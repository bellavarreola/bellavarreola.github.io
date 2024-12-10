fetch('../portfolio/projects.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); // For debugging
        renderProjects(data);
        setupCarousel(); // Assuming setupCarousel is defined elsewhere
    })
    .catch(err => {
        console.error(`Error fetching JSON: ${err}`);
    });

function renderProjects(data) {
    const projectsContainer = document.getElementById("projects");

    // Find the "Photography" project
    const photographyProject = data.projects.find(project => project.name === "Photography");

    if (photographyProject) {
        const projectDiv = document.createElement("div");
        projectDiv.className = "row photo";
        projectDiv.id = photographyProject.subtitle;

        // Add project description
        const descriptionHTML = `
            <div class="description">
                <p>${photographyProject.description.join(' ')}</p>
            </div>`;
        projectDiv.innerHTML = descriptionHTML;

        // Create a container for the images
        const photoContainer = document.createElement("div");
        photoContainer.className = "photo-tiles";

        // Loop through sections in the photography project
        photographyProject.sections.forEach(section => {
            if (section.images && section.images.length > 0) {
                // Add a section title
                const sectionTitle = document.createElement("h2");
                sectionTitle.textContent = section.title;
                photoContainer.appendChild(sectionTitle);

                // Loop through images in the section
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

        // Append the photo container to the project div
        projectDiv.appendChild(photoContainer);
        projectsContainer.appendChild(projectDiv);
    }
}

for (const button of document.querySelectorAll("#buttons button")) {
    button.addEventListener("click", e => {
        console.log(e.target.value);
        sortProjects(e.target.value);
    });
}

function sortProjects(button) {
    if (!proj || !proj.projects) {
        console.error("Error: Projects data is undefined.");
        return;
    }

    if (button === "clear") {
        proj.projects.forEach(project => {
            document.getElementById(project.subtitle).style.display = "flex";
        });
    } else if (button) {
        proj.projects.forEach(project => {
            if (project.category && project.category.includes(button)) {
                document.getElementById(project.subtitle).style.display = "flex";
            } else {
                document.getElementById(project.subtitle).style.display = "none";
            }
        });
    } else {
        console.log("Error: Button value is undefined.");
    }
}
