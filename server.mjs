import express from 'express';
const app = express()
const port = process.env.PORT || 3000;

app.get('/water', (req, res) => {
    console.log(`${req.ip} is requesting`);
    res.send('Here is some water for you')
})

app.get('/breakfast', (req, res) => {
    console.log(`${req.ip} is requesting`);
    res.send('Here is some breakfast for you')
})

app.get('/lunch', (req, res) => {
    console.log(`${req.ip} is requesting`);
    res.send('Here is some lunch for you')
})

app.get('/dinner', (req, res) => {
    console.log(`${req.ip} is requesting`);
    res.send('Here is some dinner for you')
})

app.get('/juice', (req, res) => {
    console.log(`${req.ip} is requesting`);
    res.send('Here is some juice for you')
})

app.get('/milk', (req, res) => {
    console.log(`${req.ip} is requesting`);
    res.send('Here is some milk for you')
})

app.get('/tea', (req, res) => {
    console.log(`${req.ip} is requesting`);
    res.send('Here is some tea for you')
})

app.get('/coffee', (req, res) => {
    console.log(`${req.ip} is requesting`);
    res.send('Here is some coffee for you')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
