const generateManager = function (manager) {
    return `
    <div class="card m-auto">
    <header class="card-header-title-is-centered">
    <p class="has-text-centered is-size-3">
    ${manager.name}</p>
    <p class="has-text-centered is-size-4">Manager</p>
    </header>
    <div class="card-content">
      <div class="content">
        <p class="id">ID: ${manager.id}</p>
        <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="office">Office Number: ${manager.officeNumber}</p>
      </div>
    </div>
  </div>
    `;

}

//Create Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="card m-auto">
    <header class="card-header-title-is-centered">
    <p class="has-text-centered is-size-3">
    ${engineer.name}</p>
    <p class="has-text-centered is-size-4">Engineer</p>
    </header>
    <div class="card-content">
      <div class="content">
        <p class="id">ID: ${engineer.id}</p>
        <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
      </div>
    </div>
  </div>
    `;
}
//Create intern card
const generateIntern = function (intern) {
    return `
 
    <div class="card m-auto">
    <header class="card-header-title-is-centered">
    <p class="has-text-centered is-size-3">
    ${intern.name}</p>
    <p class="has-text-centered is-size-4">Intern</p>
    </header>
    <div class="card-content">
      <div class="content">
        <p class="id">ID: ${intern.id}</p>
        <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
        <p class="school">School: ${intern.school}</p>
      </div>
    </div>
  </div>
    `;
}

//Push array to page 
generateHTML = (data) => {

//Array for cards 
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


//Call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

//Call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

//Call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }

//Joining strings 
    const employeeCards = pageArray.join('')
//Return to generated page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

// generate html page 
const generateTeamPage = function (employeeCards) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header class="has-text-centered m-auto">
          <nav class =' is-centered is-vcentered is-mobile'>
                <span class="is-size-1 has-text-centered has-text-weight-bold">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="column">
                <div class="row justify-content-center columns" id="team-cards">
                    <!--Team Cards-->
                    ${employeeCards}
                </div>
            </div>
        </main>
        
    </body>
  
    </html>
  `;
  }
  
  // export to index
  module.exports = generateHTML; 