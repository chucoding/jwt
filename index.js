const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://chucoding:chucoding@boilerplate.kmbz0du.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useUnifiedTopology: false
}).then(()=>console.log('MongoDB connect...'))
.catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));