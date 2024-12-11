let proj;

// Fetch and parse JSON
fetch('../portfolio/projects.json')
    .then(response => response.json())
    .then(projects => {
        proj = projects;
        parseData(projects);
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    });

// Parse data and populate HTML
function parseData(data) {
    const designSection = data.projects.find(project => project.name.toLowerCase() === "design");

    if (designSection) {
        const projectsContainer = document.getElementById("projects");
        projectsContainer.innerHTML = ""; // Clear any existing content
        

        // Populate only the "design" section
        for (let section of designSection.sections) {
            const category = section.category;
            const title = section.title.replace(/\s+/g, '-').toLowerCase(); // Unique ID for the section

            // Create a container for each project
            let projectHTML = `
                <div class="row project" id="${title}" data-category="${category}">
                    <div class="projimg">`;

            // Loop through the image array and append image tags
            for (let imgSrc of section.image) {
                projectHTML += `<img src="${imgSrc}" alt="${section.title} image">`;
            }

            projectHTML += `
                    </div>
                    <div class="description">
                        <h2>${section.title}</h2>
                    </div>
                </div>`;

            // Add the project to the container
            projectsContainer.innerHTML += projectHTML;
        }
    } else {
        console.log("Design section not found in JSON.");
    }
}

// Event listeners for buttons
document.querySelectorAll("#buttons button").forEach(button => {
    button.addEventListener("click", e => {
        const category = e.target.value;
        sortProjects(category);
    });
});

// Filter projects by category
function sortProjects(category) {
    const projects = document.querySelectorAll("#projects .project");

    if (category === "clear") {
        // Show all projects
        projects.forEach(project => {
            project.style.display = "flex";
        });
    } else {
        // Show only projects matching the category, hide others
        projects.forEach(project => {
            if (project.dataset.category === category) {
                project.style.display = "flex";
            } else {
                project.style.display = "none";
            }
        });
    }
    
}
