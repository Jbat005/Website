// Example array of projects
const projects = [
    {
        name: 'Quantitative Finance: Automated Portfolio Generator',
        description: `Use statistical factors to create basket of stocks that generate greater returns than the SP500. Optimizes portfolio weights using Monte-Carlo simulations, then output's portfolio expected growth, and risk-level. Click on the image to go to the GitHub page.`,
        imageUrl: 'quant_thumbnail.png',
        link: 'https://github.com/CCNY-Analytics-and-Quant/Quantative-Finance-Repo/blob/main/Auto_Portfolio/auto_portfolio_picks.ipynb'
    },
    {
        name: 'Python for Business Analytics: Pizza Restaurant',
        description: `I took pizza restaurant data and created a report of the best opportunities for success. Click on the image to explore the data yourself.`,
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
