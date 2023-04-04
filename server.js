// importing
import express from 'express'
import mongoose from 'mongoose';
import Messages from './dbMessages.js'
import dbMessages from './dbMessages.js';
import dotenv from 'dotenv'

dotenv.config();
// app config

const app = express();
const port = process.env.PORT || 9000

//middleware
app.use(express.json());
//DB config
mongoose.connect(process.env.connection_url)
// api routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/messages/sync", (req, res) => {
    Messages.find()
    .then((data) => {
        res.status(200).send(data)
    })
    .catch((err) => {
        res.status(500).send(err)
    })
})

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage)
        .then((data) => {
            res.status(201).send(data);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

//listener

app.listen(port, () => console.log(`Listening on localhost:${port}`));