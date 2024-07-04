const express = require('express');
const bodyParser = require('body-parser');
const { log } = require('console');

const users = [
    {
        id: 1,
        name:'John Doe',
        email: 'john.doe@example.com'
    },
    {
        id: 2,
        name:'Jane Smith',
        email: 'jane.smith@example.com'
    }
];


const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
   return res.send('Hello');
})


app.get('/report', (req, res) => {
    res.send('Getting report list');
});

app.get('/user', (req, res) => {
    res.send('Add user');
});



app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/user/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find(user => user.id === userId);

    if (user) {
        res.send(user);
    } else {
        res.status(404).send('User not found');
    }
});

app.post('/user', (req, res) => {
    const newUser = {
        id: users.length + 1, 
        name: req.body.name,
        email: req.body.email
    };

    

    users.push(newUser);
    
    res.status(200).send(newUser);
});

app.patch('/user/:id/email', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find(user => user.id === userId);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        res.send(user);
    } else {
        res.status(404).send('User not found');
    }
});

app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(200).send('User deleted'); 
    } else {
        res.status(404).send('User not found');
    }
});


  

app.listen(3000, () => {
    console.log('Express server is running on port 3000.') 
});