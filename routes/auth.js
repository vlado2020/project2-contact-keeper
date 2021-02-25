const express = require("express")
const router = express.Router();

// @route  GET api/auth
// @desc    Registracija usera
// @access  private

router.get('/', (req, res)=>{
    res.send('Get looged in user')
});


// @route  POST api/auth
// @desc    Registracija usera
// @access  public

router.post('/', (req, res)=>{
    res.send('Log in user')
});

module.exports = router;