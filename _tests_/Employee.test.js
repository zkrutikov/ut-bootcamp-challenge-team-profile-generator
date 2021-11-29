const Employee = require('../lib/Employee');

test ('returns employee name, id, and email', () => {
    const name = 'zak';
    const id = 1;
    const email = 'test@test.com';
    const emp = new Employee (name, id , email)
    expect(emp.name).toBe(name);
    expect(emp.id).toBe(id);
    expect(emp.email).toBe(email);
})