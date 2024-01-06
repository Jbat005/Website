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
        description: `I was given an operational database of a pizza restaurant, and my task was to provide
        opportunities for success for the restaurant through a report after first preparing the data with MySQL.
        I cleaned up the data with Python and Pandas and used the data available to me to visualize the most critical
        takeaways from the year's worth of data. I then added interactivity and pushed it to a web app, 
        allowing the user to explore the data themselves.`, 
        imageUrl: 'pizzaproject.jpg', 
        link: 'https://doc-pastor-remote-l069-2273e74aa948.herokuapp.com' 
    },
    { 
        name: 'Berry Cox Price Momentum Baskets & Monte Carlo Efficient Frontier - Quantitative Finance', 
        description: `Implements a trading strategy based on Berry Cox Alpha Generators, specifically
        the price momentum factors. These factors can predict what an asset's expected growth will be.
        It grabs a basket of the asset's with the highest factor-based score, and another basket with the lowest.
        Once it curated long and short baskets, it performs comparative performance analysis against S&P 500,
        highlighting strategy efficacy. Then outputting the most optimal weights of each asset.
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
