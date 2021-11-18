const Engineer = require("../lib/Engineer");

test('create a Engineer object', () => {
    const engineer = new Engineer("sehaj", 1, "sehamagan@gmail.com", "Sehaj97");
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringMatching(/^\S+@\S+$/));
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets Engineer name ', () => {
    const engineer = new Engineer("sehaj", 1, "sehamagan@gmail.com", "Sehaj97");
  
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
});

test('gets Engineer id ', () => {
    const engineer = new Engineer("sehaj", 1, "sehamagan@gmail.com", "Sehaj97");
  
    expect(engineer.getId()).toBe(engineer.id);
});

test('gets Engineer email ', () => {
    const engineer = new Engineer("sehaj", 1, "sehamagan@gmail.com", "Sehaj97");
  
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test('gets Engineer Github ', () => {
    const engineer = new Engineer("sehaj", 1, "sehamagan@gmail.com", "Sehaj97");
  
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});

test('gets Engineer role ', () => {
    const engineer = new Engineer("sehaj", 1, "sehamagan@gmail.com", "Sehaj97");
  
    expect(engineer.getRole()).toEqual("Engineer");
});