const unique = arrArg => arrArg.filter((elem, pos, arr) => arr.indexOf(elem) === pos);

class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    const user = { id, name, room };
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    const user = this.getUser(id);
    if (user) {
      this.users = this.users.filter(user => user.id !== id);
    }
    return user;
  }

  getUser(id) {
    return this.users.filter(user => user.id === id)[0];
  }

  getUserList(room) {
    const users = this.users.filter(user => user.room === room);
    const namesArray = users.map(user => user.name);
    return namesArray;
  }

  isUniqueUserName(name) {
    return this.users.filter(user => user.name === name).length === 0;
  }

  getRoomList() {
    // return Array.from(new Set(this.users.map((user) => user.room)));
    return unique(this.users.map(user => user.room));
  }
}

module.exports = { Users };


// [{
//     id: 111,
//     name: "Zali",
//     room: "A"
// }]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

// var users = [];

// var addUser = (id, name, room) => {
//     users.push({});
// };

// modules.exports = {addUser};

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription() {
//         return `${this.name} is ${this.age} year(s) old`;
//     }
// }

// let me = new Person("Zali", 22);
// console.log(me.getUserDescription());
