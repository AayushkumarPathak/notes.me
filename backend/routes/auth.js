const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var fetchuser = require("../middleware/fetchuser");
var jwt = require("jsonwebtoken");
const JWT_SECRET = "Aayushlpu$122";

//ROUTE 1. Create a user : POST: /api/auth/createUser
router.post(
  "/createUser",
  [
    body("userid", "Enter valid username").isLength({ min: 3 }),
    body("password", "password at least 6 char").isLength({ min: 6 }),
  ],
  async (req, res) => {
    let success = false;
    //validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }
    try {
      let user = await User.findOne({ userid: req.body.userid });
      if (user) {
        return res.status(400).json({ success, error: "User already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const securePassword = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        userid: req.body.userid,
        password: securePassword,
      });
      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({success, authToken });
    } catch (error) {
      console.log(error.message);
    }
  }
);

//Route 2. Authenticate a user {login} : POST: /api/auth/login
router.post(
  "/login",
  [
    body("userid", "Enter valid username").isLength({ min: 3 }),
    body("password", "password cannot be blank").exists(),
  ],

  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { userid, password } = req.body;
    try {
      let user = await User.findOne({ userid });
      if (!user) {
        return res
          .status(400)
          .json({
            error: "Please try to login with correct credentials not exi",
          });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res
          .status(400)
          .json({success, error: "Please try to login with correct credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.log(error.message);
    }
  }
);

//Route 3. Get loggedin user details : POST: /api/auth/getUser
router.post("/getuser",fetchuser,async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user);
    } catch (error) {
      console.log(error.message);
      res.json({ error: "Internal server error" });
    }
  }
);

module.exports = router;
