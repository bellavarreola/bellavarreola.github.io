fetch('../portfolio/projects.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); // For debugging
        renderProjects(data);
    })
    .catch(err => {
        console.error(`Error fetching JSON: ${err}`);
    });

    function renderProjects(data) {
        const projectsContainer = document.getElementById("projects"); // Ensure your HTML has this container
    
        // Filter to include only the "Videography" project
        const videographyProject = data.projects.find(project => project.name === "Videography");
    
        if (videographyProject) {
            // Create a container for the project
            const projectDiv = document.createElement("div");
            projectDiv.className = "row video";
            projectDiv.id = videographyProject.subdomain;
    
            // Add the project description
            const descriptionHTML = `
                <div class="description">
                    <h2>${videographyProject.name}</h2>
                    <p>${videographyProject.description.join(' ')}</p>
                </div>`;
            projectDiv.innerHTML = descriptionHTML;
    
            // Add the project videos
            const videoContainer = document.createElement("div");
            videoContainer.className = "projvids";
    
            videographyProject.sections.forEach(section => {
                if (section.video) {
                    const videoHTML = `
                        <div class="projvid">
                            <h3>${section.title}</h3>
                            <video controls>
                                <source src="${section.src}" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>`;
                    videoContainer.innerHTML += videoHTML;
                }
            });
    
            projectDiv.appendChild(videoContainer);
            projectsContainer.appendChild(projectDiv);
        }
    }
    