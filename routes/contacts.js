const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/User.js");
const Contact = require("../models/Contact.js");

// @route  GET api/contacts
// @desc    Get all user contacts
// @access  private

router.get("/", auth, async (req, res) => {
  try {
    //-1 će staviti zadnje kontakte na prvo mjesto
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });

    res.json(contacts);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Serverska greška");
  }
});

// @route  POST api/contacts
// @desc    dodaj kontakt
// @access  private

router.post(
  "/",
  [auth, [check("name", "Ime je obavezno").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();
      res.json(contact)
    } catch (err) {
        console.error(er.message)
        res.status(500).send('Serverske poteškoće')
    }
  }
);

// @route  PUT api/contacts/:id
// @desc    ažuriranje
// @access  private

router.put("/:id", (req, res) => {
  res.send("Updateaj");
});

// @route  PUT api/contacts/:id
// @desc    ažuriranje
// @access  private

router.delete("/:id", (req, res) => {
  res.send("Obriši");
});

module.exports = router;

module.exports = router;
