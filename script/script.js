// Function to add the "navbarDark" class to the navbar on scroll
function handleNavbarScroll() {
    const header = document.querySelector(".navbar");
    window.onscroll = function () {
        const top = window.scrollY;
        if (top >= 100) {
            header.classList.add("navbarDark");
        } else {
            header.classList.remove("navbarDark");
        }
    };
}


// Function to handle navbar collapse on small devices after a click
function handleNavbarCollapse() {
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarSupportedContent");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            new bootstrap.Collapse(menuToggle).toggle();
        });
    });
}



// Function to dynamically create HTML elements from the JSON file
function createSkillsFromJSON() {
    const container = document.querySelector("#skills .container");
    let row = document.createElement("div");
    row.classList.add("rows");

    // Load the JSON file
    fetch("data/skills.json")
        .then((response) => response.json())
        .then((data) => {
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                // card.classList.add("col-lg-4", "mt-4");
                card.innerHTML = `
                     <div class="card skillsText">
                         <div class="card-body-skill">
                            <img src="./images/${item.image}" alt="${item.alt}" />
                        </div>
                    </div>
                 `;

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple or it's the last element, create a new row
                if ((index + 1) % 6 === 0 || index === data.length - 3) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("rows");
                }
            });
        });
}


// Function to dynamically create HTML elements from the JSON file
function createPortfolioFromJSON() {
    const container = document.querySelector("#portfolio .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    fetch("data/portfolio.json")
        .then((response) => response.json())
        .then((data) => {
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                card.innerHTML = `
                <div class="card portfolioContent">
                     <img class="card-img-top" src="images/${item.image}" alt="${item.alt}">
                    <div class="card-body">
                       <div class="text-center overlay-title">
                          <h3 class="text-center">${item.title}</h3>
                            <a href="${item.link}" class="" target="_blank">
                              <img src="images/${item.imageLink}" class="btn_link" alt="${item.altLien}">
                            </a>
                        </div>
                        <p class="overlay">${item.text}</p>
                    </div>
                </div>
                `;

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple of 3 or it's the last element, create a new row
                if ((index + 1) % 6 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        });
}

// Call the functions to execute the code
handleNavbarScroll();
handleNavbarCollapse();
createSkillsFromJSON();
createPortfolioFromJSON();
