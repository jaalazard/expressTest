const express = require('express');
const app = express();
const port = 5000;

app.listen(port, (err) => {
    if (err) {
        console.log('Nope')
    } else {
        console.log('Coucou');
    }
})

app.get("/", (req, res) => {
    res.send("Welcome !");
});

const welcomeName = (req, res) => {
    res.send(`Welcome ${req.params.name}`);
};

app.get("/users/:name", welcomeName);
