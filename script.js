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
        description: `This SQL database contains pizza restaurant data. I created a report of the best opportunities for success, and visualized the most critical
        takeaways from the year's worth of data. Click on the image to explore the data yourself.`, 
        imageUrl: 'pizzaproject.jpg', 
        link: 'https://doc-pastor-remote-l069-2273e74aa948.herokuapp.com' 
    },
    { 
        name: 'Berry Cox Price Momentum Baskets & Monte Carlo Efficient Frontier - Quantitative Finance', 
        description: `Implements price momentum factors trading strategy, that predict asset's expected growth.
        Curates long and short baskets, highlighting strategy efficacy over long run. Lastly, optimizes portfolio weights using monte carlo simulation.
        Click on the image to go to the GitHub page.`,
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


document.addEventListener('DOMContentLoaded', displayProjects);
