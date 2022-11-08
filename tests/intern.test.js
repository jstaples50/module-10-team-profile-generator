const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('should create an Intern object with a school value and a value of Intern for role', () => {
            const intern = new Intern('Sam', 7777, 'sam@gmail.com', 'Middle Tennessee State University');

            expect(intern.school).toEqual('Middle Tennessee State University');
            expect(intern.role).toEqual('Intern');
        })

        it('should throw an error if school is not a string', () => {
            const cb = () => new Intern('Sam', 7777, 'sam@gmail.com');
            const err = new Error("Expected parameter 'school', to be a non-empty string");

            expect(cb).toThrow(err);
        })
    })

    describe('getSchool', () => {
        it('should return objects school value', () => {
            const intern = new Intern('Sam', 7777, 'sam@gmail.com', 'Middle Tennessee State University');

            expect(intern.getSchool()).toEqual('Middle Tennessee State University');
        })
    })
})