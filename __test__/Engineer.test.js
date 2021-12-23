const Engineer = require('../lib/Engineer');

test('Get github', () => {
    const testValue = "github";
    const i = new Engineer('Jack', 1, 'jack@example.com', testValue);
    expect(i.github).toBe(testValue);
});

test('getrole return enginner', () => {
    const testValue = "Enginner";
    const i = new Engineer('Jack', 1, 'jack@example.com', testValue);
    expect(i.getRole).toBe(testValue);
});

test('Github username', () => {
    const testValue = "github";
    const i = new Engineer('Jack', 1, 'jack@example.com', testValue);
    expect(i.getGithub).toBe(testValue);
});