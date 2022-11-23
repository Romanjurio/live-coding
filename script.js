// //put your code here
//  const vehicle = {
//   move() {
//     console.log(`${this.name} is moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   }
// };

// const ship = {
//   name: 'Argo',
//   startMachine() {
//     console.log(`${this.name} lifting anchor up`);
//     this.move();
//   },
//   stopMachine() {
//     console.log(`${this.name} lifting anchor down`);
//     this.stop();
//   },
//   year: 1999,
//   __proto__: vehicle
// };

// function getOwnProps(obj) {
//   return Object.entries(obj)
//     .filter((prop) => typeof prop[1] !== "function")
//     .map((prop) => prop[0]);
// }

// console.log(getOwnProps(ship));

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }

// User.prototype.sayHi = function () {
//     console.log(`Hi, I am ${this.name}`);
// };

// User.prototype.requestNewPhoto = function () {
//     console.log(`New photo request was sent for ${this.name}`);
// };

// User.prototype.setAge = function (age) {
//     this.age = age;
//     if (this.age >= 25) {
//         console.log(`New photo request was sent for ${this.name}`);
//     } else if (this.age > 0) {
//         return this.age;
//     } else if (this.age <= 0) {
//         return false;
//     }
// };

// const user1 = new User('Tom', 0);
// user1.sayHi();
// user1.requestNewPhoto();
// user1.setAge(2);

//put your code here
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(value) {
//     const [firstName, lastName] = value.split(' ');
//     this.firstName = firstName;
//     this.lastName = lastName;

//   }
// };

// console.log(user.fullName);
// user.fullName = 'Tom Hardy';
// console.log(user.fullName);

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     static createEmpty() {
//         return { name: '', age: null };
//     }

//     sayHi() {
//         console.log(`Hi, I am ${this.name}`);
//     }

//     requestNewPhoto() {
//         console.log(`New photo request was sent for ${this.name}`);
//     }

//     setAge(age) {
//         this.age = age;
//         if (this.age >= 25) {
//             this.requestNewPhoto();
//         } else if (this.age > 0) {
//             return this.age;
//         } else if (this.age <= 0) {
//             return false;
//         }
//     }
// }

// const user1 = new User('Tom', 19);
// user1.sayHi();
// user1.requestNewPhoto();
// user1.setAge(26);

// console.log(User.createEmpty());

// class Vehicle {
//     constructor(name, numberOfWheels) {
//         this.name = name;
//         this.numberOfWheels = numberOfWheels;
//     }

//   move() {
//     console.log(`${this.name} is moving`);
//   }

//   stop() {
//     console.log(`${this.name} stopped`);
//   }
// }

// class Ship extends Vehicle {
//   constructor(name, numberOfWheels, maxSpeed) {
//     super()
//     this.name = name;
//     this.numberOfWheels = numberOfWheels;
//     this.maxSpeed = maxSpeed;
//   }

//   move() {
//     console.log(`${this.name} lifting anchor up`);
//     super.move();
//   }

//   stop() {
//     super.stop();
//     console.log(`${this.name} lifting anchor down`);
//   }

// }

// const ship1 = new Ship('Aurora', false ,23);
// console.log(ship1);

// ship1.move()

// ship1.stop()

// class Wallet {
//     constructor() {
//         this._balance = 0;
//     }

//     getBalance() {
//         return this._balance;
//     }

//     deposit(amount) {
//         this._balance += amount;
//     }

//     withdraw(amount) {
//         if (this._balance < amount) {
//             console.log('No enough funds');
//             return;
//         }
//         this._balance -= amount;
//     }
// }

// const wallet1 = new Wallet();
// console.log(wallet1._balance);
// console.log(wallet1.getBalance());
// wallet1.deposit(100);
// console.log(wallet1._balance);
// wallet1.withdraw(95);
// console.log(wallet1._balance);
// wallet1.withdraw(95);

// /**
//  * @field {string} id
//  * @field {number} price
//  * @field {date} dateCreated
//  * @field {boolean} isConfirmed
//  * @field {date} dateConfirmed
//  * @field {string} city
//  * @field {string} type
//  */
// class Order {
//     dateCreated = new Date();
//     isConfirmed = false;
//     dateConfirmed = null;

//     constructor(price, city, type, ID) {
//         this.price = price;
//         this.city = city;
//         this.type = type;
//         this.ID = String(Math.random());
//     }

//     checkPrice() {
//         return this.price > 1000 ? true : false;
//     }

//     confirmOrder() {
//         this.isConfirmed = true;
//         this.dateConfirmed = new Date();
//     }

//     isValidType() {
//         if (this.type === 'Buy' || this.type === 'Sell') {
//             return true;
//         }
//         return false;
//     }
// }

// const order1 = new Order(1200, 'Lviv', 'Buy');
// console.log(order1);

/* eslint-disable max-classes-per-file */
const usersArray = [
    {
        id: 42521,
        name: 'Vasya',
        sessionId: Math.round(Math.random() * (100 - 10) + 10),
    },
    {
        id: 75435,
        name: 'Petya',
        sessionId: Math.round(Math.random() * (100 - 10) + 10),
    },
    {
        id:19284,
        name: 'Adolf',
        sessionId: Math.round(Math.random() * (100 - 10) + 10),
    },
    {
        id: 947174,
        name: 'Ivan',
        sessionId: Math.round(Math.random() * (100 - 10) + 10),
    },
    {
        id: 104325,
        name: 'Uzurbek',
        sessionId: Math.round(Math.random() * (100 - 10) + 10),
    },
];

class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get sessionId() {
        return this._sessionId;
    }
}

class UserRepository {
  constructor(users) {
        this._users = Object.freeze(users);
    }

    get users() {
        return this._users;
    }

    getUserNames() {
        return this._users.map((user) => user.name);
    }

    getUserIds() {
        return this._users.map((user) => user.id);
    }

  getUserNameById(id) {
    return this._users.filter((user) => user.id === id).name;
    }
}

// examples
// const user = new User('1', 'Tom', 'session-id');

// // получить свойства можем
// console.log(user.id); // ===> '1'
// console.log(user.name); // ===> 'Tom'
// console.log(user.sessionId); // ===> 'session-id'

// // но изменить эти свойства нельзя
// user._name = 'Bob'; // пытаемся изменить старое значение
// console.log(user._name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

const users = new UserRepository(usersArray);
// console.log(users);
users.getUserNameById(947174);