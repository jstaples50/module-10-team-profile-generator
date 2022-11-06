const Employee = require('../lib/employee')

describe('Employee', () => {
    describe('Initialization', () => {
        it('should create an object with a name, id, and email if provided valid arguments, and a defalut of Employee for role', () => {
            const employee = new Employee('Harry', 4114, 'harry@gmail.com')

            expect(employee.name).toEqual('Harry');
            expect(employee.id).toEqual(4114);
            expect(employee.email).toEqual('harry@gmail.com');
            expect(employee.role).toEqual('Employee')
        })

        it('should throw an error if provided no arguments', () => {
            const cb = () => new Employee();

            expect(cb).toThrow();
        })

        it('should throw an error if name is not a string', () => {
            const cb = () => new Employee(0, 4114, 'harry@gmail.com');
            const err = new Error("Expected parameter 'name', to be a non-empty string");

            expect(cb).toThrow(err);
        })

        it('should throw an error if not provied a valid id', () => {
            const cb = () => new Employee('Harry');
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrow(err);
        })

        it("should thorw an error if not provided a valid email", () => {
            const employee = new Employee('Harry', 4114, 'notvalidemail');
            const expected = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            expect(employee.email).toEqual(expect.not.stringMatching(expected));
        })
    })

    describe('getName', () => {
        it('should return objects name value', () => {
            const employee = new Employee('Vance', 5776, 'vance@gmail.com');

            expect(employee.getName()).toEqual('Vance');
        })
    })

    describe('getId', () => {
        it('should return objects id value', () => {
            const employee = new Employee('Vance', 5776, 'vance@gmail.com');

            expect(employee.getId()).toEqual(5776);
        })
    })

    describe('getEmail', () => {
        it('should return objects id value', () => {
            const employee = new Employee('Vance', 5776, 'vance@gmail.com');

            expect(employee.getEmail()).toEqual('vance@gmail.com');
        })
    })

    describe('getRole', () => {
        it('should return objects id value', () => {
            const employee = new Employee('Vance', 5776, 'vance@gmail.com');

            expect(employee.getRole()).toEqual('Employee');
        })
    })
})