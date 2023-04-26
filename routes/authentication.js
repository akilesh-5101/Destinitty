const express = require('express');
const router = express.Router();


router.get('/register', (req,res) => {
    res.render('authenticate/register');//
})

module.exports = router;