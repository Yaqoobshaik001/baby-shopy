const express = require('express');
const router = express.Router();
const signUpTempletCopy = require('../models/signUpModels')

router.post('/signup',(request,response)=>{
    const signedUpUser = new signUpTempletCopy({
        userName: request.body.userName,
        email: request.body.email,
        password: request.body.password
    })
    signedUpUser.save() 
    .then( data =>{
        response.json(data)
    })
    .catch( error => {
        response.json(error)
    })
})

module.exports = router;