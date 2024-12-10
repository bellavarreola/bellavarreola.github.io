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
        const projectsContainer = document.getElementById("projects");
    
        const videographyProject = data.projects.find(project => project.name === "Videography");
    
        if (videographyProject) {
            const projectDiv = document.createElement("div");
            projectDiv.className = "row video";
            projectDiv.id = videographyProject.subdomain;
    
            const descriptionHTML = `
                <div class="description">
                    <h2>${videographyProject.name}</h2>
                    <p>${videographyProject.description.join(' ')}</p>
                </div>`;
            projectDiv.innerHTML = descriptionHTML;
    
            const videoContainer = document.createElement("div");
            videoContainer.className = "projvids";
    
            videographyProject.sections.forEach(section => {
                if (section.video) {
                    const isVimeo = section.src.includes("vimeo.com");
    
                    const videoHTML = isVimeo
    ? `
    <div class="projvid">
        <h3>${section.title}</h3>
        <div style="padding:56.25% 0 0 0;position:relative;">
            <iframe src="${section.src}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
        </div>
    </div>`
    : `
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
    