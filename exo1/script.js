document.addEventListener('DOMContentLoaded', () => {

/* Objet simple */

  let marina = {
    name: 'Marina',
    age: 22,
    sayHello: () => {
      console.log(`Hello my name is ${this.name}`)
    }
  }

console.log(marina);
console.log(marina.name);
console.log(marina['age']);
marina.sayHello();


/*Objet constructor ES5*/

  //Modèle objet
  function User(paramName, paramAge){
    this.name = paramName;
    this.age = paramAge
  };

  // Ajouter une fonctionalité --> object proptotype
  User.prototype.sayHello = function (){
    console.log(`Hello my name is ` + this.name)
  };

  User.prototype.howOld = function (){
    console.log(`My age is ` + this.age);
  }

  // Instanciation du model objet
  let chuck = new User('Chuck', 79);
  chuck.sayHello();
  chuck.howOld();
  console.log(typeof chuck);

  let jean = new User('Jean', 59);
  jean.sayHello();
  jean.howOld();
  console.log(typeof jean);
})
