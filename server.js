'use strict'

const express = require('express'); 
const { request, response } = require('express');

const server = express(); 

const PORT = process.env.PORT || 3000;


server.use(express.static('./public'));


// to create like a page in the server called test for example:

server.get('/test', (request,response) =>{

    response.send('server');
    
})

server.get('/data',(request,response)=>{
    let Person = [
        {name: 'aman'},
        {age: '23'},
        {course: '301'},
        {location: 'amman'}
    ]
    response.json(Person);
})



// to make the server listen to your port yy
server.listen(PORT,()=>{
    console.log('Listening on port',PORT);
});