const express = require('express');




const app = express()

app.get('/', function (req, res) {
   return res.send('Hello Jovana');
})

app.get('/users', (req, res) => {
    res.send('Ovde su korisnici');
});
  

app.get('/user', (req, res) => {
    res.send('Samo jedan user');
});
   
app.get('/email', (req, res) => {
    res.send('Unesite vas email');
});
  

app.listen(3000, () => {
    console.log('Example app is listening on port 3000.') 
});