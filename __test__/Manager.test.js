
const Manager = require("../lib/Manager");

test('create a manager object', () => {
    const manager = new Manager("sehaj", 1, "sehamagan@gmail.com", 12344);
  
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringMatching(/^\S+@\S+$/));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets manager name ', () => {
    const manager = new Manager("sehaj", 1, "sehamagan@gmail.com", 12344);
  
    expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
});

test('gets manager id ', () => {
    const manager = new Manager("sehaj", 1, "sehamagan@gmail.com", 12344);
  
    expect(manager.getId()).toBe(manager.id);
});

test('gets manager email ', () => {
    const manager = new Manager("sehaj", 1, "sehamagan@gmail.com", 12344);
  
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test('gets manager officeNumber ', () => {
    const manager = new Manager("sehaj", 1, "sehamagan@gmail.com", 12344);
  
    expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
});

test('gets manager role ', () => {
    const manager = new Manager("sehaj", 1, "sehamagan@gmail.com", 12344);
  
    expect(manager.getRole()).toEqual("Manager");
});