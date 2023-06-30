import { name,userAge } from "./components/new-component";
const zmienna = 6669;
console.log("Hello", zmienna);
console.log(`Halko ${name}, pewnie masz ${userAge} lat`);

//Klasy

class Vehicle {
    constructor(type){
        this.type = type;
    }
    getType(){
        return this.type;
    }
}

class Car extends Vehicle {
    numberOfWheels = 4;
    constructor(type, name){
        super(type);
        this.name = name;
    }
    showInfo(){
        console.log(`I am a ${this.getType()}, my name is ${this.name} and i have ${this.numberOfWheels} wheels.`)
    }
}

const myCar = new Car("car", "Ford");
myCar.showInfo();
console.log("siema");

const list = document.querySelector(".list--js");
const search = document.querySelector(".search--js");
const buttonSearch = document.querySelector(".buttonSearch--js");
const buttonClear = document.querySelector(".buttonClear--js");
const avatar = document.querySelector(".avatar--js");
const nameUser = document.querySelector(".nameUser");
const reposGit = document.querySelector(".repos");

buttonSearch.addEventListener('click', (e) => {
    localStorage.setItem('name', search.value);
    window.location.reload();
    reposGit.classList.add("block");
    reposGit.classList.remove("none");
});

buttonClear.addEventListener('click', (e) => {
    reposGit.classList.add("none");
    reposGit.classList.remove("block");
    search.value = " ";
});

search.value = localStorage.getItem('name');
const username = localStorage.getItem('name');

if(username.length > 0){
    fetch('https://api.github.com/users/'+username+'/repos')
    .then(resp => resp.json())
    .then(resp => {
        const repos = resp;
        for(const repo of repos){
            list.innerHTML += `<li class="list-item"><a target="_blank" href="${repo.html_url}">${repo.name}</a></li>`;
        }
    })
    .catch(err => {
        console.log(err);
    });

    fetch('https://api.github.com/users/'+username+'')
    .then(resp => resp.json())
    .then(resp => {
        const user = resp;
        avatar.innerHTML = `<img class="avatarGit" src="${user.avatar_url}" alt="avatar" />`;
        nameUser.innerHTML = `<h2>Nazwa użytkownika: ${user.login} </h2>`;
    })
    .catch(err => {
        console.log(err);
    });
    }
    
