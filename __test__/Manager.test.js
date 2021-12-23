const Manager = require('../lib/Manager')

test("create a managers office number", () => {
    const testValue = 300;
    const i = new Manager('Travis', 1, "travis@test.com", testValue);
    expect(i.officeNumber).toBe(testValue);
});

test('create a manager', () => {
    const testValue = 'Manager';
    const i = new Manager('Travis', 1, "travis@test", testValue);
    expect(i.getRole).toBe(testValue);
});

test('get office number', () => {
    const testValue = "Manager";
    const i = new Manager('Travis', 1, "travis@test", testValue);
    expect(i.getOfficeNumber).toBe(testValue);
});