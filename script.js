/*
// Commenting out this part for now as the elements are not defined in HTML
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav').classList.toggle('active');
});
*/

// Example array of projects
const projects = [
    { 
        name: 'Pizza Restaurant Analysis - Full website with interactive dashboard', 
        description: `My first data analysis project, I was given a dataset of a pizza restaurant.
        The task was to prepare the data using SQL. Python was the language that I used for the analysis,
        with the goal to create a report detailing the opportunities for the restaurant. I decided to make a 
        web app, just as a learning experiment. Clicking on the image will take you to the web app.`, 
        imageUrl: 'pizzaproject.jpg', 
        link: 'https://doc-pastor-remote-l069-2273e74aa948.herokuapp.com' 
    },
    { 
        name: 'Berry Cox Price Momentum Baskets & Monte Carlo Efficient Frontier - Quantitative Finance Project', 
        description: `Created a trading strategy based on price momentum factors, back tested for performance against the S&P 500,
        it calculates the momentum factors using pandas and NumPy library 
        to to curate long and short stock baskets. Then performs comparative performance analysis against S&P 500, highlighting strategy efficacy.
        Clicking on the image will take you to the GitHub page.`,
        imageUrl: 'berrycox1.png', // Only one image
        link: 'https://github.com/CCNY-Analytics-and-Quant/Quantative-Finance-Repo/blob/main/Berry-Cox-Baskets/final_project.ipynb'
    }

    // ... (additional projects) ...
];

function displayProjects() {
    const projectsContainer = document.getElementById('projects');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        let projectContent = `<h3>${project.name}</h3><p>${project.description}</p>`;

        if (project.imageUrl) {
            // Add target="_blank" to open in a new tab
            projectContent += `<a href="${project.link}" target="_blank"><img src="${project.imageUrl}" alt="${project.name}"></a>`;
        }

        projectElement.innerHTML = projectContent;
        projectsContainer.appendChild(projectElement);
    });
}

document.addEventListener('DOMContentLoaded', displayProjects);
