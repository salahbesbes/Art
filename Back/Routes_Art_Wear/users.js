const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../Middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../Models/User");
const bcrypt = require("bcryptjs");

/*                          desc:    signup users route
                            @access  Public           */

router.post(
  "/signup",
  [
    check("name", "name is required")
      .not()
      .isEmpty(),
    check("email", "please enter a valid email").isEmail(),
    check("password", "pls enter a valid password").isLength({ min: 6 })
  ],
  async (req, res) => {
    try {
      // ***************************** to handel the response  ****************************

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { name, email, password } = req.body;

      // ***************************** see if user exist ****************************

      let user = await User.findOne({ email });
      if (user)
        return res
          .status(400)
          .json({ errors: [{ msg: "user already exists" }] });

      // ***************************** encrypt password ****************************
      user = new User({
        name,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // ***************************** Saving new user ****************************

      await user.save();

      // ***************************** return jsonwebtoken ****************************

      const payload = {
        user: {
          id: user.id
        }
      };
      let token = await jwt.sign(payload, "secret-token", {
        expiresIn: 360000
      });
      res.send({ token });
    } catch (error) {
      console.log("there is an error in catch \n", error.message);
      res.status(500).send("Server Error");
    }
  }
);

/*                       @route   post api/auth  ( this is a login )
                         @desc    authenticate  user and get the token
                         @access  Public                              */

router.post(
  "/signin",
  [
    // ********** some condition to handel validation  ****************************
    check("email", "please enter a valid email").isEmail(),
    check("password", "Password is required").exists()
  ],
  async (req, res) => {
    try {
      // ********** to handel the response  ****************************************

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // ********** see if user exist ****************************

      const { email, password } = req.body;

      let user = await User.findOne({ email });
      if (!user)
        return res
          .status(400)
          .json({ errors: [{ msg: "invalid Credentials" }] });

      // ********** password  ***************************

      let isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res
          .status(400)
          .json({ errors: [{ msg: "invalid Credentials" }] });

      // ********** return jsonwebtoken *************************

      const payload = {
        user: {
          id: user.id
        }
      };
      let token = await jwt.sign(payload, "secret-token", {
        expiresIn: 360000
      });
      res.send({ token });
    } catch (error) {
      console.log("there is an error in catch \n", error.message);
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

/*                             @route   GET api/auth
                               @desc    geting user 
                               @access  private            */

router.get("/user", auth, async (req, res) => {
  try {
    // ********** searching the user by id in the token *************************

    const user = await User.findById(req.user.id, "-password");
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Authontification Erro" });
  }
});

router.get("/allusers", auth, async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ msg: "Authontification Erro" });
  }
});

router.delete("/user/:id", auth, async (req, res) => {
  try {
    let id = req.params.id;
    let result = await User.findById(id);
    if (!result)
      return res.status(404).json({ msg: " this user do not exist" });
    let user = await User.findByIdAndRemove(id);
    res.status(200).json({ msg: `the user name " ${user.name} " is deleted` });
  } catch (err) {
    console.log("we fail to delete the User ");
    res.status(400).json({ msg: " Sry we didnt delete the User " });
  }
});
module.exports = router;
