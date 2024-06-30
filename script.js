// Example array of projects
const projects = [
    {
        name: 'Quant-trading: My Portfolio',
        descriptionTemplate: `Automatically tracks my stock portfolio. The portfolio is up <span class="highlight">+%MAX_RISK_RETURN%%</span> since 11/15/2023 - 4/2/2024 (Over %WEEKS% Weeks/ <span class="highlight">+%MAX_RISK_WEEKLY_AVG%%</span> weekly average).<span class="highlight2">If you click on the graph, it will direct to GitHub where I show the code I used, with explanations of how I used alpha generators to select my stocks, aswell as show the analysis and plots .</span>`,
        imageUrl: 'benchmark_plot.png',
        link: 'https://github.com/CCNY-Analytics-and-Quant/Quantative-Finance-Repo/blob/main/Berry-Cox-Baskets/auto_portfolio_picks.ipynb'
    },
    {
        name: 'Python Dashboard: Pizza Restaurant Sales',
        descriptionTemplate: `Sales Dashboard: Visualized and analyzed sales data for a pizza restaurant. (Assigned project for a programming course at college.) <span class="highlight2">Visit the website.</span>`,
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