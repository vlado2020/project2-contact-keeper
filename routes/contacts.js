const express = require("express")
const router = express.Router();

// @route  GET api/contacts
// @desc    Get all user contacts
// @access  private

router.get('/', (req, res)=>{
    res.send('Get request to contacts')
});


// @route  POST api/contacts
// @desc    dodaj kontakt
// @access  private

router.post('/', (req, res)=>{
    res.send('Dodaj kontakt')
});


// @route  PUT api/contacts/:id
// @desc    ažuriranje
// @access  private

router.put('/:id', (req, res)=>{
    res.send('Updateaj')
});


// @route  PUT api/contacts/:id
// @desc    ažuriranje
// @access  private

router.delete('/:id', (req, res)=>{
    res.send('Obriši')
});

module.exports = router;

module.exports = router;