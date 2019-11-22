document.addEventListener('DOMContentLoaded', () => {

/* Definition d'une classe User */

class User{
    // Injecter des valeurs dans la classe --> définition de l'objet
    constructor(paramName, paramAge){
      this.name = paramName;
      this.age = paramAge;
    }

    /* Methodes --> fonctions de l'objet */
    sayHello (){
      console.log(`Hello my name is ${this.name}`)
    }

    howOld (){
      console.log(`My age is ${this.age} years old`);
    }
}

  /* Création de nouveaux utilisateurs */

  let marina = new User('Marina', 22);
  marina.sayHello();
  marina.howOld();
  console.log(marina);



})


