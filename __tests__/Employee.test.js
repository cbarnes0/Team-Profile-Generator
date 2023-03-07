const Employee = require('../lib/Employee');
const employee = new Employee('carson', '123456', 'cbarnes@gmail.com');

test('test if can get constructor values for employee object', () => {
    expect(employee.name).toBe('carson');
    expect(employee.id).toBe('123456');
    expect(employee.email).toBe('cbarnes@gmail.com');
});

test('test if we can get name from getName() method', () => {
    expect(employee.getName()).toBe('carson');
});

test('test if we can get id from getID()', () => {
    expect(employee.getID()).toBe('123456');
});

test('test if we can get email from getEmail()', () => {
    expect(employee.getEmail()).toBe('cbarnes@gmail.com');
});