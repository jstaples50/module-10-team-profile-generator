const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should create an Engineer object with a github value and a value of Engineer for role', () => {
            const engineer = new Engineer('Carry', 5566, 'carry@gmail.com', 'carry5060');

            expect(engineer.github).toEqual('carry5060');
            expect(engineer.role).toEqual('Engineer');
        })

        it('should throw an error if github is not a string', () => {
            const cb = () => new Engineer('Carry', 5566, 'carry@gmail.com');
            const err = new Error("Expected parameter 'github', to be a non-empty string");

            expect(cb).toThrow(err);
        })
    })

    describe('getGitHub', () => {
        it('should return objects github value', () => {
            const employee = new Engineer('Vance', 5776, 'vance@gmail.com', 'vance-gith');

            expect(employee.getGitHub()).toEqual('vance-gith');
        })
    })
})