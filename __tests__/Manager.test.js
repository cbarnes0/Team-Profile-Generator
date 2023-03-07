const Manager = require('../lib/Manager');
const manager = new Manager('carson', '123456', 'cbarnes@gmail.com', '321');

test('tests if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('carson');
    expect(manager.id).toBe('123456');
    expect(manager.email).toBe('cbarnes@gmail.com');
    expect(manager.officeNumber).toBe('321');
});

test('test if we can get name from getName() method', () => {
    expect(manager.getName()).toBe('carson');
});

test('test if we can get id from getID()', () => {
    expect(manager.getID()).toBe('123456');
});

test('test if we can get email from getEmail()', () => {
    expect(manager.getEmail()).toBe('cbarnes@gmail.com');
});

test('test if we can get office number from getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toBe('321');
});

test('test if we can get role from getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});