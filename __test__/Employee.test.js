
const Employee = require("../lib/Employee");

test('create a employee object', () => {
    const emp = new Employee("sehaj", 1, "sehamagan@gmail.com");
  
    expect(emp.name).toEqual(expect.any(String));
    expect(emp.id).toEqual(expect.any(Number));
    expect(emp.email).toEqual(expect.stringMatching(/^\S+@\S+$/));
});

test('gets manager name ', () => {
    const emp = new Employee("sehaj", 1, "sehamagan@gmail.com");
  
    expect(emp.getName()).toEqual(expect.stringContaining(emp.name));
});

test('gets manager id ', () => {
    const emp = new Employee("sehaj", 1, "sehamagan@gmail.com");
  
    expect(emp.getId()).toBe(emp.id);
});

test('gets manager email ', () => {
    const emp = new Employee("sehaj", 1, "sehamagan@gmail.com");
  
    expect(emp.getEmail()).toEqual(expect.stringContaining(emp.email));
});

test('gets manager role ', () => {
    const emp = new Employee("sehaj", 1, "sehamagan@gmail.com");
  
    expect(emp.getRole()).toEqual("Employee");
});