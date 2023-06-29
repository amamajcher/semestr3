// class User {
//     test = "test";

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     hello() {
//         return `Hello my name is ${this.name}`;
//     }

//     static sum(a,b) {
//         console.log(a+b);
//     }
// }

// class Developer extends User {
//     constructor(name, age, language) {
//         super(name, age);
//         this.language = language;
//     }

//     helloWorld() {
//         console.log(`${this.hello()} and I am ${this.language} developer`)
//     }
// }

// // User.sum(10,5);

// const user1 = new User("Marcin");
// console.log(user1.hello());

// const developer1 = new Developer("Jan", 30, 'Javascript');
// developer1.helloWorld();

import { Modal } from "./components/modal";

const modalInfo = localStorage.getItem("Modal");
const element = document.getElementById("modal-welcome");

if(modalInfo){
    element.classList.add("displaynone");
}else{
    const welcomeModal = new Modal('modal-welcome', { onCloseShowInfo: true });
    welcomeModal.init();
}
