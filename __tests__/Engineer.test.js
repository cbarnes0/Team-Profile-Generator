const Engineer = require('../lib/Engineer');
const engineer = new Engineer('carson', '123456', 'cbarnes@gmail.com', 'cbarnes0');

// copied and paste this from manager Test and changes to meet requirements for this
test('tests if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('carson');
    expect(engineer.id).toBe('123456');
    expect(engineer.email).toBe('cbarnes@gmail.com');
// changed this to match requirements for Engineer
    expect(engineer.githubUserName).toBe('cbarnes0');
});

test('test if we can get name from getName() method', () => {
    expect(engineer.getName()).toBe('carson');
});

test('test if we can get id from getID()', () => {
    expect(engineer.getID()).toBe('123456');
});

test('test if we can get email from getEmail()', () => {
    expect(engineer.getEmail()).toBe('cbarnes@gmail.com');
});

test('test if we can get github username from getGithubUserName()', () => {
    expect(engineer.getGithubUserName()).toBe('cbarnes0');
});

test('test if we can get role from getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
});