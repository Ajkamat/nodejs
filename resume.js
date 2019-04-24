const express = require('express');
const hbs = require('hbs'); 
var app = express(); 
const port = 3000;
app.set('view engine', 'hbs'); 
app.use(express.static(__dirname + '/public')); 


app.get('/', (req, res) => {
    res.render('qualification.hbs', {
        educationTitle: 'YOUR QUALIFICATION' 
         
            
    
    });
}); 
 
app.get('/achievments', (req, res) => {  
    res.render('achievments.hbs',
    {     achievmentsTitle: 'YOUR ACHIEVMENTS' 

 });
}); 
 
app.get('/hobbies', (req, res) => {  
    res.render('hobbies.hbs',
    {     hobbiesTitle: 'YOUR HOBBIES'

 });
}); 

app.get('/certificates', (req, res) => {  
    res.render('certificates.hbs',
    {     certificatesTitle: 'YOUR certificates'

 });
}); 




app.get('/error', (req, res) => {  
    res.send({      errorMsg: 'not found'  
 });
}); 
 
app.listen(port, () => {   
console.log(`App listening on port number:3000`); 
 });

