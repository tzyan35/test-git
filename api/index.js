const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
}).then(console.log("Connected to MongoDB")).catch((err) => console.log(err));

app.use("/api/auth", authRoute) 
app.use("/api/users", userRoute) 
app.use("/api/posts", postRoute) 
app.use("/api/categories", categoryRoute)

app.use("/lama",(req,res) => {
    console.log("Hey this is lama url")
})

console.log('hello')
console.log('update')
app.listen("5000", ()=> {
    console.log("backend is running")
})