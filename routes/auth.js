const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require('../middleware/auth')
const { check, validationResult } = require("express-validator");

const User = require("../models/User.js");

// @route  GET api/auth
// @desc    Registracija usera
// @access  private

router.get("/", auth, async(req, res) => {
  
    //select - password je da ne pošaljemo password u res objektu
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Greška na serveru")
    }
});

// @route  POST api/auth
// @desc    Registracija usera
// @access  public

router.post(
  "/",
  [
    check("email", "Upišite email s kojim ste se registrirali").isEmail(),
    check("password", "Unesite password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Netočni pristupni podaci" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: "Netočni pristupni podaci" });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 3600 * 24,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Greška na serveru");
    }
  }
);

module.exports = router;
