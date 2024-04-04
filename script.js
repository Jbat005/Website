
// Example array of projects
const projects = [
    {
        name: 'Quantitative Finance: Automated Portfolio Generator',
        descriptionTemplate: `Creates a portfolio automatically with investments designed to outperform the market without extra risk.
        The portfolio has increased by <span class="highlight">%RETURN%</span> since the completion of this project: (11/15/2023 - 4/2/2024)(over 19 Weeks/ +3.75% weekly average).
        Showcases a portfolio weight-distribution system that enhanced returns by +13.25% (over 19 weeks/ +.7% weekly average).
        Click on the image to go to the GitHub page.`,
        imageUrl: 'portfolio_results.png',
        link: 'https://github.com/CCNY-Analytics-and-Quant/Quantative-Finance-Repo/blob/main/Berry-Cox-Baskets/auto_portfolio_picks.ipynb'
    },
    {
        name: 'Python for Business Analytics: Pizza Restaurant Dashboard',
        descriptionTemplate: `Took pizza restaurant data and created a dashboard of the best opportunities for success.
        Provides actionable insights based on order data.
        Click on the image to visit the website.`,
        imageUrl: 'pizzaproject.jpg',
        link: 'https://jbatistanalytics-3400acb06bb1.herokuapp.com'
    }
    // ... (additional projects) ...
];

async function fetchDataAndUpdateUI() {
    try {
        const response = await fetch('https://yc1rg58xdb.execute-api.us-east-2.amazonaws.com/prod/Fetch-Data'
        );
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Assuming data contains "Max Risk Portfolio Returns"
        const maxRiskPortfolioReturns = data["Max Risk Portfolio Returns"];
        
        // Call displayProjects with the specific data you want to display
        displayProjects(maxRiskPortfolioReturns);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Ensure this function is defined in the script tag in your HTML or in a separate JS file that's linked to your HTML.
document.addEventListener('DOMContentLoaded', function() {
    fetchDataAndUpdateUI(); // This will fetch data and then update the UI
});

function displayProjects(maxRiskReturn) {
    const projectsContainer = document.getElementById('projects');
    projectsContainer.innerHTML = ''; // Clear existing content

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
        projectLink.href = project.link; // Ensure this is a valid URL
        projectLink.target = '_blank';
        projectLink.rel = 'noopener noreferrer';
        const projectImg = document.createElement('div');
        projectImg.classList.add('project-img');
        const image = document.createElement('img');
        image.src = project.imageUrl; // Ensure this is a valid image URL
        image.alt = project.name;
        projectLink.appendChild(image);
        projectImg.appendChild(projectLink);
        projectElement.appendChild(projectImg);

        // Add project description
        const projectDescription = document.createElement('p');
        projectDescription.classList.add('project-description');
        // Replace placeholder with actual data
        const description = project.descriptionTemplate.replace('%RETURN%', `+${maxRiskReturn.toFixed(2)}%`);
        projectDescription.innerHTML = description;
        projectElement.appendChild(projectDescription);

        // Append project to the projects container
        projectsContainer.appendChild(projectElement);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDataAndUpdateUI(); // This now both fetches data and displays projects
});

