const bcrypt = require("bcryptjs");

const users = [
  {
    name: "admin",
    email: "123@gamil.com",
    password: bcrypt.hashSync("123456123", 10),
    isAdmin: true,
  },
  {
    name: "zeeshan",
    email: "zeeshan@gamil.com",
    password: bcrypt.hashSync("zeeshan123", 10),
  },
  {
    name: "ali",
    email: "ali@gamil.com",
    password: bcrypt.hashSync("ali123", 10),
  },
];
module.exports=users;