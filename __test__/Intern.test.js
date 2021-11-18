const Intern = require("../lib/Intern");

test('create a Intern object', () => {
    const intern = new Intern("sehaj", 1, "sehamagan@gmail.com", "university of toronto");
  
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringMatching(/^\S+@\S+$/));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern name ', () => {
    const intern = new Intern("sehaj", 1, "sehamagan@gmail.com", "university of toronto");
  
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name));
});

test('gets intern id ', () => {
    const intern = new Intern("sehaj", 1, "sehamagan@gmail.com", "university of toronto");
  
    expect(intern.getId()).toBe(intern.id);
});

test('gets intern email ', () => {
    const intern = new Intern("sehaj", 1, "sehamagan@gmail.com", "university of toronto");
  
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test('gets intern School ', () => {
    const intern = new Intern("sehaj", 1, "sehamagan@gmail.com", "university of toronto");
  
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test('gets intern role ', () => {
    const intern = new Intern("sehaj", 1, "sehamagan@gmail.com", "university of toronto");
  
    expect(intern.getRole()).toEqual("Intern");
});