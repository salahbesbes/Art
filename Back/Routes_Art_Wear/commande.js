const express = require("express");
const router = express.Router();
const Order = require("../Models/Commande");
const auth = require("../Middleware/auth");
const User = require("../Models/User");

/*                          desc:    post/update order
                            @access  Private           */

router.post("/order", auth, async (req, res) => {
  /* **************  we search if the user has already a order  ***************** */

  let verifOrder = await Order.findOne({ user: req.user.id }, "-Articles");

  try {
    if (verifOrder) {
      verifOrder = await Order.findOneAndUpdate(
        { user: req.user.id },
        {
          $set: {
            user: req.user.id,
            name: user.name,
            email: user.email,
            Articles: req.body
          }
        },
        { new: true }
      );
      return res
        .status(200)
        .json({ msg: " Felicitation u have just updated your order" });
    }

    /* **************  if the first time we save the order  ***************** */

    let user = await User.findById(req.user.id, "-password");

    let order = new Order({
      user: req.user.id,
      name: user.name,
      email: user.email,
      Articles: req.body
    });

    await order.save();

    res.status(200).json({ msg: "Felicitaion : Your Command has been sent " });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "some this wrong with server " });
  }
});

/*                          desc:    get all order for Admin
                            @access  Private           */

router.get("/orders", auth, async (req, res) => {
  try {
    let allOrder = await Order.find();
    res.status(200).json(allOrder);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "some thing happen " });
  }
});
module.exports = router;
