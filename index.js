//required NPM modules
const inquirer = require('inquirer');
const fs = require('fs');

//required local modules
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./generateHTML');

//Array to hold team
const teamArr = [];

const promptManager = () => {
	return inquirer.prompt([{
				type: 'input',
				name: 'name',
				message: 'Enter the managers name (Required)',
				validate: nameInput => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please enter the manager's name!");
						return false;
					}
				}
			},
			{
				type: 'input',
				name: 'employeeID',
				message: "Enter the manager's ID number",
				validate: nameInput => {
                    if  (isNaN(nameInput)) {
                        console.log ("Please enter the manager's ID!")
                        return false; 
                    } else {
                        return true;
                    }
                }
            },
			{
				type: 'input',
				name: 'email',
				message: "Please enter the managers email address.",
				validate: emailInput => {
					if (emailInput) {
						return true;
					} else {
						console.log("Please enter the managers email address!");
						return false;
					}
				}
			},
			{
				type: 'input',
				name: 'officeNumber',
				message: 'Enter your office number (Required)',
				validate: officeNumberInput => {
					if (officeNumberInput) {
						return true;
					} else {
						console.log('Please enter your office number!');
						return false;
					}
				}
			},
		])
        .then(managerInput => {
            const  { name, employeeID, email, officeNumber } = managerInput; 
            const manager = new Manager (name, employeeID, email, officeNumber);
    
            teamArr.push(manager); 
            console.log(manager); 
        })
		
};

const addEmployee = () => {
		console.log(`
    =================
    Adding employees to the team
    =================
    `);


	            return inquirer.prompt([
                    {
						type: 'list',
						name: 'role',
						message: "Please choose the employee's role",
						choices: ['Engineer', 'Intern']
					},
					{
						type: 'input',
						name: 'name',
						message: "Please enter an employee's name!",
						validate: nameInput => {
							if (nameInput) {
								return true;
							} else {
								console.log("Please enter an employee's name!");
								return false;
							}
						}
					},
					{
						type: 'input',
						name: 'id',
						message: "Please enter the employee's ID.",
						validate: nameInput => {
                            if  (isNaN(nameInput)) {
                                console.log ("Please enter the employee's ID!")
                                return false; 
                            } else {
                                return true;
                            }
                        }
                    },
					{
						type: 'input',
						name: 'email',
						message: "Please enter the employee's email.",
						validate: emailInput => {
							if (emailInput) {
								return true;
							} else {
								console.log("Please enter the employee's email.");
								return false;
							}
						}
					},
					{
						type: 'input',
						name: 'github',
						message: "Please enter the employee's github username.",
						when: (input) => input.role === "Engineer",
						validate: nameInput => {
							if (nameInput) {
								return true;
							} else {
								console.log("Please enter the employee's github username!")
							}
						}
					},
					{
						type: 'input',
						name: 'school',
						message: "Please enter the intern's school",
						when: (input) => input.role === "Intern",
						validate: nameInput => {
							if (nameInput) {
								return true;
							} else {
								console.log("Please enter the intern's school!")
							}
						}
					},
					{
						type: 'confirm',
						name: 'confirmAddEmployee',
						message: 'Would you like to add more team members?',
						default: false
					}
				])
            
				.then(employeeData => {
					//Data for employee types 

					let {
						name,
						id,
						email,
						role,
						github,
						school,
						confirmAddEmployee
					} = employeeData;
					let employee;

					if (role === "Engineer") {
						employee = new Engineer(name, id, email, github);

						console.log(employee);

					} else if (role === "Intern") {
						employee = new Intern(name, id, email, school);

						console.log(employee);
					}

					teamArr.push(employee);

					if (confirmAddEmployee) {
						return addEmployee(teamArr);
					} else {
						return teamArr;
					}
				})
		};


//Function to generate HTML page file using file system 
		const writeFile = data => {
			fs.writeFile('./dist/index.html', data, err => {
				// if there is an error 
				if (err) {
					console.log(err);
					return;
					// when the profile has been created 
				} else {
					console.log("Your team profile has been successfully created! Please check out the index.html")
				}
			})
		};



		promptManager()
        .then(addEmployee)
			.then(teamArr => {
				return generateHTML(teamArr);
			})
			.then(pageHTML => {
				return writeFile(pageHTML);
			})
			.catch(err => {
				console.log(err);
			});