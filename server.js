const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');

const app = express();

let initialPath = path.join(__dirname,"public");

app.set("views",path.join(__dirname,"/views"));

app.use(bodyParser.json());
app.use(express.static(initialPath));

app.listen(8080,() => {
    console.log('listening on port 8080');
})

app.get("/" , (req,res) => {
    res.sendFile(path.join(initialPath,"index.html"));
})

app.get("/login",(req,res) => {
    res.sendFile(path.join(initialPath,"login.html"));
})
app.get("/register",(req,res) => {
    res.sendFile(path.join(initialPath,"register.html"));
})
app.get("/profile",(req,res) => {
    res.sendFile(path.join(initialPath,"profile.html"));
})
app.get("/mainpage",(req,res) => {
    res.sendFile(path.join(initialPath,"mainpage.html"));
})
app.get("/category/strategy",(req,res) => {
    res.sendFile(path.join(initialPath,"Strategy.html"));
})
app.get("/category/simulation",(req,res) => {
    res.sendFile(path.join(initialPath,"Simulation.html"));
})
app.get("/category/racing",(req,res) => {
    res.sendFile(path.join(initialPath,"Racing.html"));
})
app.get("/category/community",(req,res) => {
    res.sendFile(path.join(initialPath,"community.html"));
})
app.get("/category/adventure",(req,res) => {
    res.sendFile(path.join(initialPath,"adventure.html"));
})
app.get("/category/adventure/minecraft",(req,res) => {
    res.sendFile(path.join(initialPath,"minecraft.html"));
})

app.use((req,res) => {
    res.send(path.join(initialPath,"login.html"));
})

