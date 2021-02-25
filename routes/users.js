const express = require("express")
const router = express.Router();

// @route  POST api/users
// @desc    Registracija usera
// @access  Public
router.post('/', (req, res)=>{
    res.send('Registracija korisnika')
});

module.exports = router;