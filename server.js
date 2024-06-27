const express = require('express');




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
    res.send('Delete user');
});



  

app.listen(3000, () => {
    console.log('Express server is running on port 3000.') 
});