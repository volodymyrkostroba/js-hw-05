const Account = function(login,email){
  this.login = login;
  this.email = email;
} // конструктор

Account.prototype.getInfo = function(){
  console.log(`login: ${this.login},email:${this.email}`);
} // прототип

console.log(Account.prototype.getInfo); // function

const mango = new Account('Mangozedog','mango@dog.woof'); 

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly','poly@mail.com');

poly.getInfo(); // Login: Poly, Email: poly@mail.com