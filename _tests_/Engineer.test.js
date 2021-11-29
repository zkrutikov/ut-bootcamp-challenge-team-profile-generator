const Engineer = require('../lib/Engineer');

test ("returns engineer's github ", () => {
    const github = 'someuser';
    const emp = new Engineer ('zak', '1', 'someuser@someemail.com', github)
    expect(emp.github).toBe(github);
})