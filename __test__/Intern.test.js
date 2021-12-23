const Intern = require('../lib/Intern');

test("Get school", () => {
    const testValue = "Dominic";
    const i = new Intern('Jack', 1, 'jack@test.com', testValue);
    expect(i.getSchool).toBe(testValue);
});

test('getRole return intern', () => {
    const testValue = "Intern";
    const i = new Intern('Jack', 1, 'jack@test.com', testValue);
    expect(i.getRole).toBe(testValue);
});

test('School with getSchool', () => {
    const testValue = "Dominic";
    const i = new Intern('Jack', 1, 'jack@test.com', testValue);
    expect(i.getSchool).toBe(testValue);
});