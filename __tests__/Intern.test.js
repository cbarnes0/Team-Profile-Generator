const Intern = require('../lib/Intern');
const intern = new Intern('carson', '123456', 'cbarnes@gmail.com', 'UGA');

test('tests if we can get the constructor values for the intern object', () => {
    expect(intern.name).toBe('carson');
    expect(intern.id).toBe('123456');
    expect(intern.email).toBe('cbarnes@gmail.com');
// changed this to match requirements for intern
    expect(intern.school).toBe('UGA');
});

test('test if we can get name from getName() method', () => {
    expect(intern.getName()).toBe('carson');
});

test('test if we can get id from getID()', () => {
    expect(intern.getID()).toBe('123456');
});

test('test if we can get email from getEmail()', () => {
    expect(intern.getEmail()).toBe('cbarnes@gmail.com');
});

test('test if we can get school from getSchool()', () => {
    expect(intern.getSchool()).toBe('UGA');
});

test('test if we can get role from getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
});