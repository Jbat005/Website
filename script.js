// Example array of projects
const projects = [
    {
        name: 'Pizza Restaurant Analysis - Full website with interactive dashboard',
        description: `This SQL database contains pizza restaurant data. I created a report of the best opportunities for success, and visualized the most critical takeaways from the year's worth of data. Click on the image to explore the data yourself.`,
        imageUrl: 'pizzaproject.jpg',
        link: 'https://jbatistanalytics-3400acb06bb1.herokuapp.com'
    },
    {
        name: 'Berry Cox Price Momentum Baskets & Monte Carlo Efficient Frontier - Quantitative Finance',
        description: `Implements price momentum factors trading strategy, that predict asset's expected growth. Curates long and short baskets, highlighting strategy efficacy over long run. Lastly, optimizes portfolio weights using monte carlo simulation. Click on the image to go to the GitHub page.`,
        imageUrl: 'berrycox1.png',
        link: 'https://github.com/CCNY-Analytics-and-Quant/Quantative-Finance-Repo/blob/main/Berry-Cox-Baskets/final_project.ipynb'
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
