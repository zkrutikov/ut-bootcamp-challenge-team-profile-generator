const Intern = require('../lib/Intern');

test ("returns intern's school", () => {
    const school = 'someschool';
    const emp = new Intern ('Peter', 2 ,'someuser@someemail.com', school)
    expect(emp.school).toBe(school);
})