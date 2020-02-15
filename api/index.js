const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const redis = require("redis"),
    client = redis.createClient();
const { promisify } = require('util');
const getAsync = promisify(client.get).bind(client);

app.get('/jobs', async (req, res) => {
    try {
        const jobs = await getAsync('github');
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        console.log(JSON.parse(jobs).length);
        res.send(jobs);
    } catch (error) {
        console.error(error.message);
        res.status(400).send("Server Error")
    }
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))