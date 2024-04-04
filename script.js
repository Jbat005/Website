// Example array of projects
const projects = [
    {
        name: 'Quantitative Finance: Automated Portfolio Generator',
        descriptionTemplate: `Creates a stock-portfolio automatically designed to outperform the market without extra risk. The portfolio has increased by <span class="highlight">+%MAX_RISK_RETURN%%</span> since the completion of this project: (11/15/2023 - 4/2/2024)(Over %WEEKS% Weeks/ <span class="highlight">+%MAX_RISK_WEEKLY_AVG%%</span> weekly average). Showcases a portfolio weight-distribution system that enhanced returns by <span class="highlight">+%DIFF_MAX_EQUAL%%</span> (Over %WEEKS% Weeks/ <span class="highlight">+%DIFF_WEEKLY%%</span> weekly average). <span class="highlight2">Click on the image to go to the GitHub page.</span>`,
        imageUrl: 'newplot.png',
        link: 'https://github.com/CCNY-Analytics-and-Quant/Quantative-Finance-Repo/blob/main/Berry-Cox-Baskets/auto_portfolio_picks.ipynb'
    },
    {
        name: 'Python for Business Analytics: Pizza Restaurant Dashboard',
        descriptionTemplate: `Took pizza restaurant data and created a dashboard of the best opportunities for success. Provides actionable insights based on order data. <span class="highlight2">Click on the image to visit the website.</span>`,
        imageUrl: 'pizzaproject.jpg',
        link: 'https://jbatistanalytics-3400acb06bb1.herokuapp.com'
    }
    // ... (additional projects) ...
];

async function fetchDataAndUpdateUI() {
    try {
        const response = await fetch('https://yc1rg58xdb.execute-api.us-east-2.amazonaws.com/prod/Fetch-Data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        displayProjects(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayProjects(apiData) {
    const projectsContainer = document.getElementById('projects');
    projectsContainer.innerHTML = ''; // Clear existing content

    // Use today's date as the end date
    const endDate = new Date();
    const startDate = new Date('11/15/2023');
    const weeksBetween = Math.round((endDate - startDate) / (7 * 24 * 60 * 60 * 1000));

    // Format the current date as "MM/DD/YYYY"
    const currentFormattedDate = `${endDate.getMonth() + 1}/${endDate.getDate()}/${endDate.getFullYear()}`;

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        // Add project title
        const projectTitle = document.createElement('h3');
        projectTitle.classList.add('project-title');
        projectTitle.textContent = project.name;
        projectElement.appendChild(projectTitle);

        // Add clickable project image
        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.target = '_blank';
        projectLink.rel = 'noopener noreferrer';
        const projectImg = document.createElement('div');
        projectImg.classList.add('project-img');
        const image = document.createElement('img');
        image.src = project.imageUrl;
        image.alt = project.name;
        projectLink.appendChild(image);
        projectImg.appendChild(projectLink);
        projectElement.appendChild(projectImg);

        // Add project description with dynamic data replacement
        const projectDescription = document.createElement('p');
        projectDescription.classList.add('project-description');
        let description = project.descriptionTemplate
            .replace('%MAX_RISK_RETURN%', apiData["Max Risk Portfolio Returns"].toFixed(2))
            .replace('%WEEKS%', weeksBetween)
            .replace('%MAX_RISK_WEEKLY_AVG%', apiData["Max Risk Portfolio Average Weekly Returns"].toFixed(2))
            .replace('%DIFF_MAX_EQUAL%', apiData["Difference in Returns between Max-Risk and Equal-Weight Portfolios"].toFixed(2))
            .replace('%WEEKS%', weeksBetween)
            .replace('%DIFF_WEEKLY%', apiData["Difference in Returns between Max-Risk and Equal-Weight Portfolios (Weekly)"].toFixed(2))
            .replace('11/15/2023 - 4/2/2024', `11/15/2023 - ${currentFormattedDate}`); // Dynamic date range
        projectDescription.innerHTML = description;
        projectElement.appendChild(projectDescription);

        // Append project to the projects container
        projectsContainer.appendChild(projectElement);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDataAndUpdateUI();
});