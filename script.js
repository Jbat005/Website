// Example array of projects
const projects = [
    {
        name: 'Quantitative Finance: Automated Portfolio Generator',
        description: `<ul>
                        <li>Automatically generates a portfolio that maximizes returns with respect to risks.</li>
                        <li>The portfolio has increased by 70.59% since the completion of this project(11/15/2023 - 3/28/2024).</li>
                        <li>Showcases a 3.715% average weekly return over 19 weeks so far.</li>
                        <li>Click on the image to go to the GitHub page.</li>
                      </ul>`,
        imageUrl: 'portfolio_results.png',
        link: 'https://github.com/CCNY-Analytics-and-Quant/Quantative-Finance-Repo/blob/main/Berry-Cox-Baskets/auto_portfolio_picks.ipynb'
    },
    {
        name: 'Python for Business Analytics: Pizza Restaurant',
        description: `<ul>
                        <li>Took pizza restaurant data and created a report of the best opportunities for success.</li>
                        <li>Click on the image to visit the report website.</li>
                      </ul>`,
        imageUrl: 'pizzaproject.jpg',
        link: 'https://jbatistanalytics-3400acb06bb1.herokuapp.com'
    }
    // ... (additional projects) ...
];

function displayProjects() {
    const projectsContainer = document.getElementById('projects');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        const projectText = document.createElement('div');
        projectText.classList.add('project-text');
        projectText.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;

        const projectImg = document.createElement('div');
        projectImg.classList.add('project-img');
        if (project.imageUrl) {
            projectImg.innerHTML = `<a href="${project.link}" target="_blank"><img src="${project.imageUrl}" alt="${project.name}"></a>`;
        }

        projectElement.appendChild(projectText);
        projectElement.appendChild(projectImg);
        projectsContainer.appendChild(projectElement);
    });
}

// Function to open the resume modal
function openResumeModal() {
    var modal = document.getElementById('resumeModal');
    var pdfViewer = document.getElementById('pdfViewer');
    modal.style.display = "block";
    pdfViewer.src = 'Resume.pdf'; // Set the source to your PDF file
}

// Function to close the resume modal
function closeResumeModal() {
    var modal = document.getElementById('resumeModal');
    var pdfViewer = document.getElementById('pdfViewer');
    modal.style.display = "none";
    pdfViewer.src = ''; // Clear the source of the iframe to stop loading the PDF
}

document.addEventListener('DOMContentLoaded', function() {
    displayProjects();

    // Get the resume thumbnail and set up the click event
    var resumeThumbnail = document.getElementById('resume-thumbnail'); // Make sure this is the correct ID
    resumeThumbnail.addEventListener('click', openResumeModal);

    // Get the close button for the modal
    var span = document.getElementsByClassName("close")[0];
    span.addEventListener('click', closeResumeModal);
});
