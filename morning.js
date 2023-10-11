const express = require('express');

const app = express();

let user = "James";

app.get('/', (req,res) => {
    res.send("Welcome to my server!")
})

app.get('/user', (req,res) => {
    res.send(user)
})

app.listen(3000, () => {
    console.log("Server has started ")
})

const express = require('express')

const app = express()

let user= "James";

app.get('/', (req,res) => {
    res.send("Welcome to my server!")
})

app.get('/user', (req,res) => {
    res.send(user)
})

app.listen(3000, () => {
    console.log("Server has started")
})

const express = require('express')

const app = express()

let user = "James";

app.get('/', (req,res) => {
    res.send("Welcome to my server!")
})

app.get('/user', (req, res) => {
    res.send(user)
})

app.listen(3000, () => {
    console.log("Server 3000 has started")
})