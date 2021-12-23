const Employee = require('../lib/Employee');

describe('Employee', () => {
    test("create employee", () => {
        const i = new Employee();
        expect(typeof(i)).toBe('object');
    });

    test('Check name', () => {
        const name = 'John';
        const i = new Employee(name);
        expect(i.name).toBe(name);
    });

    test('check id', () => {
        const id = '123';
        const i = new Employee(id);
        expect(i.id).toBe(id);
    });

    test('check email', () => {
        const testValue = 'test@example.com';
        const e = new Employee('eddie', 1, testValue);
        expect(e.email).toBe(testValue);
    });
})