//All the logic goes here.
import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Users from "./dbUsers.js";
import Cors from 'cors';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://dinder-admin:yE4xGElB73vLq2EN@cluster0.q7fz809.mongodb.net/?retryWrites=true&w=majority`

// Middlewares
app.use(express.json());
app.use(Cors());

//DB Config
mongoose.connect(connection_url)

//API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello Dunder'));

app.post('/card', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/card', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/users', (req, res) => {
    const dbUsers = req.body;

    Users.create(dbUsers, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/users', (req, res) => {
    Users.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));