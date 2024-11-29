// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config({
    path: './.env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 9000, () => {
        console.log(`Server is Running on Port : ${process.env.PORT}`);
    })
})
.catch(() => {
    console.log("Error connecting to database");
})