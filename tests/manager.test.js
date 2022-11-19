const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('should create a Manager object with an officeNumber value and a value of Manager for role', () => {
            const manager = new Manager('Laura', 3466, 'laura@gmail.com', 13);

            expect(manager.officeNumber).toEqual(13);
            expect(manager.role).toEqual('Manager');
        })

        it('should throw an error if officeNumber is not a non-negative number', () => {
            const cb = () => new Manager('Laura', 3466, 'laura@gmail.com');
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");

            expect(cb).toThrow(err);
        })
    })
})