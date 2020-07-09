function Developer(name){
  this.name = name;
  this.type = "Developer";
}

function Tester(name){
  this.name = name;
  this.type = "Tester"
}

function EmployeeFactory(){
  this.create = (name, type) => {
    switch(type){
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
    }
  }
}

function say(){
  console.log("My name is"+ this.name +" I am a "+ this.type)
}

var employees = [];

const employeeFactory = new EmployeeFactory();

employees.push(employeeFactory.create("Sankar", 1));
employees.push(employeeFactory.create("Ananthy", 2));

employees.forEach( emp => {
  say.call(emp)
})

console.log(employees)


