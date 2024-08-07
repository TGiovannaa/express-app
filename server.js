const express = require('express');
const bodyParser = require('body-parser');
const { body, param, validationResult } = require('express-validator');
const addUser = require('./addNewUser');

const { log } = require('console');
const { updateUser } = require('./updateUser');

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

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

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

app.post('/user',
body('name').notEmpty().withMessage('Name is required').isString().withMessage('Name must be a string'),
body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email must be valid'),
validate, 
(req, res) => {
    const newUser = addUser.addNewUser(users, req);

    
    res.status(200).send(newUser);
});

app.patch('/user/:id/email',
    param('id').isInt().withMessage('ID must be an integer'),
    body('name').notEmpty().withMessage('Name is required').isString().withMessage('Name must be a string'),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email must be valid'),
    validate,
     (req, res) => {
  
     updateUser(users, res, req);
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