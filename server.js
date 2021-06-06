const express = require("express");
const PORT = 5000;
const app = express();
const products = require("./data/products");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const notFound = require("./middleware/errorMiddleware");
const errorHandler = require("./middleware/errorMiddleware");
const productRoutes = require("./routes/productRoutes");

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`Server up and running on port: ${PORT}`));
