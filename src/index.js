import express from "express";
import bodyParser from "body-parser";
import { PORT } from "./config.js";
import {connectDB} from "./db.js";
import userRoute from "./routes/userRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/productsRoute.js";
import cookieParser from 'cookie-parser'
import session from 'express-session'


const app = express();

app.use(bodyParser.json());
app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
      secret: "secret",
      resave: false, //evita que la sesion se vuelva a guardar si no hay datos,
      saveUninitialized: false, //evita que se guarde una sesion no inicializada
    })
  )

connectDB();

//http://localhost:3030/api/user

app.use("/api/user", userRoute);
app.use("/api/category", categoryRoute);
app.use("/api/product", productRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}` );
});