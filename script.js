const projects = [
    {
        name: 'Portfolio Management & Investments Tracker',
        imageUrl: 'newplot2.png',
        link: 'https://github.com/CCNY-Analytics-and-Quant/Quantative-Finance-Repo/blob/main/Berry-Cox-Baskets/auto_portfolio_picks.ipynb'
    },
    {
        name: 'Output',
        descriptionTemplate: `
            Up <span class="highlight">+%MAX_RISK_RETURN%%</span> since November 15, 2023. (<span class="highlight">+%MAX_RISK_WEEKLY_AVG%%</span> average over %WEEKS% weeks).
            Returning <span class="highlight">+%DIFF_MAX_SPY%</span> over the SP500 index.`
    }
];

async function fetchDataAndUpdateUI(useMockData = false) {
    try {
        if (useMockData) {
            // Mocked API response
            const mockedApiData = {
                "Max Risk Portfolio Returns": 0.25,
                "Max Risk Portfolio Average Weekly Returns": 0.015,
                "Difference in Returns between Max-Risk and Equal-Weight Portfolios": 0.05,
                "Difference in Returns between Max-Risk and Equal-Weight Portfolios (Weekly)": 0.002,
                "Sp500 Returns": 0.20,
                "Difference in Returns between Max-Risk and Sp500": 0.05,
                "Stock_1": "AAPL",
                "Stock_1_weight": 0.15,
                "Stock_2": "GOOGL",
                "Stock_2_weight": 0.12,
                "Stock_3": "MSFT",
                "Stock_3_weight": 0.10,
                "Stock_4": "TSLA",
                "Stock_4_weight": 0.08,
                "Stock_5": "AMZN",
                "Stock_5_weight": 0.05,
                "Stock_6": "NFLX",
                "Stock_6_weight": 0.05,
                "Stock_7": "NVDA",
                "Stock_7_weight": 0.10,
                "Stock_8": "META",
                "Stock_8_weight": 0.08,
                "Stock_9": "INTC",
                "Stock_9_weight": 0.07,
                "Stock_10": "AMD",
                "Stock_10_weight": 0.05
            };

            displayProjects(mockedApiData);
        } else {
            // Fetch data from the live API
            const response = await fetch('https://yc1rg58xdb.execute-api.us-east-2.amazonaws.com/prod/Fetch-Data');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayProjects(data);
        }
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

        // Add project image if available
        if (project.imageUrl) {
            const projectImgContainer = document.createElement('div');
            projectImgContainer.classList.add('project-img');

            const projectImg = document.createElement('img');
            projectImg.src = project.imageUrl;
            projectImg.alt = project.name;

            // Add clickable link if available
            if (project.link) {
                const projectLink = document.createElement('a');
                projectLink.href = project.link;
                projectLink.target = '_blank';
                projectLink.rel = 'noopener noreferrer';
                projectLink.appendChild(projectImg);
                projectImgContainer.appendChild(projectLink);
            } else {
                projectImgContainer.appendChild(projectImg);
            }

            projectElement.appendChild(projectImgContainer);
        }

        // Add project description
        if (project.name === 'Output') {
            const projectDescription = document.createElement('p');
            projectDescription.classList.add('project-description');
            let description = project.descriptionTemplate
                .replace('%MAX_RISK_RETURN%', apiData["Max Risk Portfolio Returns"].toFixed(2))
                .replace('%WEEKS%', weeksBetween)
                .replace('%MAX_RISK_WEEKLY_AVG%', apiData["Max Risk Portfolio Average Weekly Returns"].toFixed(2))
                .replace('%DIFF_MAX_SPY%', apiData["Difference in Returns between Max-Risk and Sp500"].toFixed(2));
            projectDescription.innerHTML = description;
            projectElement.appendChild(projectDescription);

            // Add stock information dynamically
            for (let i = 1; i <= 10; i++) {
                if (apiData[`Stock_${i}`] && apiData[`Stock_${i}_weight`]) {
                    const stockInfo = document.createElement('p');
                    stockInfo.classList.add('project-description');
                    stockInfo.textContent = `${apiData[`Stock_${i}`]}: ${(apiData[`Stock_${i}_weight`] * 100).toFixed(2)}% Weight`;
                    projectElement.appendChild(stockInfo);
                }
            }
        }

        // Append project to the container
        projectsContainer.appendChild(projectElement);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Change `useMockData` to `true` for testing with mocked data
    fetchDataAndUpdateUI(true);
});