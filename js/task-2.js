class User{
  constructor(name,age,folowers){
this.name = name;
this.age = age;
this.folowers = folowers;
  }

  getInfo(){
    console.log(`User ${this.name} is ${this.age} years old and has ${this.folowers} followers`)
  }
}

const mango = new User('Mango',2,20);
mango.getInfo();

const polly = new User('Polly',23,2015);
polly.getInfo();