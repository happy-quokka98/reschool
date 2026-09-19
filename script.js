// OOP - Object Oriented Programming - [], {}, Date - ES6 ECMASCRIPT2015 (2016 წელს)

// class Car {
//     constructor(model, brand, year, monitor){
//         this.model = model;
//         this.brand = brand;
//         this.year = year;
//         this.monitor = monitor;
//     }
// instance methods
// static methods
// getter and setter

// }

// const Mercedes = new Car("C", "Mercedes", 2016, true);
// console.log(Mercedes.monitor)

// class BankAccount{

//     #balance = 0; // private

//     constructor(owner, initiateDeposit){
//         this.owner = owner;
//         this.#balance = initiateDeposit;
//     }

//     deposit(amount){
//         if(amount < 0) throw new Error("თანხა უნდა იყოს 0-ზე მეტი :*(")
//         this.#balance += amount;
//         return this.#balance;
//     }

//     get balance(){
//         return `${this.owner}-ს ბალანსი შეადგენს ${this.#balance} ლარს.`
//     }

//     static compareBalances(acc1, acc2){
//         return acc1.#balance - acc2.#balance;
//     }

// }

// class Mybank extends BankAccount{

//     constructor(ragaca, rugaca, owner, initiateDeposit){
//         this.ragaca = ragaca;
//         this.rugaca = rugaca;
//         super(owner, initiateDeposit);
//     }

// }

//     const myAcc = new BankAccount("კახი", 0);
//     myAcc.deposit(1000);

//     console.log(myAcc.balance)

// DOM

//getElementById();

const data = document.createElement("ul");

for (let i = 0; i < 10; i++) {
  const lint = document.createElement("li");
  lint.textContent = Math.floor(Math.random() * 67);
  data.appendChild(lint);
}

function newElement(dataInfo){
    const element = document.createElement("li");
    element.textContent = dataInfo
     data.appendChild(element);
}

const clicker = document.getElementById("clicker")
const texter = document.getElementById("text")

clicker.addEventListener("click", () => {
    newElement(texter.value);

    texter.value = ""
})



document.body.appendChild(data);
