const mongoose = require("mongoose");
const dotenv = require("dotenv");
const users = require("./data/Users");
const User = require("./models/usermodel");
const Product = require("./models/Productmodel");
const Order = require("./models/ordermodel");
const products = require("./data/product");
const connectDb = require("./config/db");

dotenv.config();
connectDb();

const importData = async() => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const createUser = await User.insertMany(users);
    const adminUser = createUser[0]._id;
    const sampleData = products.map((product) => {
      return { ...product, User: adminUser };
    });
    await Product.insertMany(sampleData);
    console.log("Data imported!!");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};
const dataDestory = async() => {
  try {
  await Order.deleteMany();
  await Product.deleteMany();
  await User.deleteMany();
  console.log("Data Destory");
    process.exit();
  }catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
  
};
if (process.argv[2] === "-d") {
  dataDestory();
} else importData();
