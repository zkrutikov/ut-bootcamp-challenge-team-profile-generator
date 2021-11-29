const Manager = require('../lib/Manager');

test ("returns manager's office number", () => {
    const officeNumber = 4324;
    const emp = new Manager ('zak', '1', 'someuser@someemail.com', officeNumber)
    expect(emp.officeNumber).toBe(officeNumber);
})