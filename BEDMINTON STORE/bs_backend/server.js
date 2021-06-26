const express = require("express");
const products = require("./data/product");
const dotenv = require("dotenv");
const connectdb = require("./config/db");
const connectDb = require("./config/db");
const productroutes= require("./routes/productsRoute");
const {errorHandler}=require("./middleware/errormiddleware");
const usersRoutes = require (".//routes/UsersRoute");

dotenv.config();
connectDb();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>cnbsjdcnscbnscbbs</h1>");
});

app.use("/api",productroutes);
app.use("/api/users",usersRoutes);


app.use(errorHandler)

const PORT = 4000;
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
