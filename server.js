const express = require('express');

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

app.get('/', function (req, res) {
   return res.send('Hello Jovana');
})


app.get('/report', (req, res) => {
    res.send('Getting report list');
});

app.get('/user', (req, res) => {
    res.send('Add user');
});

app.post('/user', (req, res) => {
    res.send('Create user');
});
app.patch('/user', (req, res) => {
    res.send('Update user');
});
app.delete('/user', (req, res) => {
    res.send('Delete user!');
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



  

app.listen(3000, () => {
    console.log('Express server is running on port 3000.') 
});