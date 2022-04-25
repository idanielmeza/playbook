const User = require('../app/User');

describe('Unit test for User ',()=>{
    test('Create an User Object',()=>{
        const user = new User(1,'idanielmeza','Daniel','Hello World','2020-01-01','2020-01-01');

        //Pruebas
        expect(user.id).toBe(1);
        expect(user.username).toBe('idanielmeza');
        expect(user.name).toBe('Daniel');
        expect(user.bio).toBe('Hello World');
        expect(user.dateCreated).toBe('2020-01-01');
        expect(user.lastUpdated).toBe('2018-01-01');
    })

    test('Create an User Object 2',()=>{
        const user = new User(1,'idanielmeza','Daniel','Hello World');

        //Pruebas
        expect(user.id).toBe(1);
        expect(user.username).toBe('idanielmeza');
        expect(user.name).toBe('Daniel');
        expect(user.bio).toBe('Hello World');
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    })

    test('Add getters',()=>{
        const user = new User(1,'idanielmeza','Daniel','Hello World');

        //Pruebas
        expect(user.getUsername()).toBe('idanielmeza');
        expect(user.getBio()).toBe('Hello World');
        expect(user.getDateCreated()).not.toBeUndefined();
        expect(user.getLastUpdated()).not.toBeUndefined();
    })

    test('Add setters',()=>{
        const user = new User(1,'idanielmeza','Daniel','Hello World');

        //Pruebas
        user.setUsername('idanielmeza2');
        user.setBio('Hello World 2');

        expect(user.getUsername()).toBe('idanielmeza2');
        expect(user.getBio()).toBe('Hello World 2');
    })
})