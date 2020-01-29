const mongoose = require("mongoose");

const CommandeSchema = mongoose.Schema({
  status: { type: String, default: "En cours" },
  name: { type: String },
  moneyToPay: { type: Number },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  email: { type: String },
  Articles: []
});
module.exports = Commande = mongoose.model("commande", CommandeSchema);
