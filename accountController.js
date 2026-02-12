const Account = require('../models/Account');


// Create a new account
exports.createAccount = async (req, res) => {
 try {
   const { accountNumber, cardPin, balance, atmCardNo, holderName } = req.body;
   const newAccount = new Account({ accountNumber, cardPin, balance, atmCardNo, holderName });
   await newAccount.save();
   res.status(201).json(newAccount);
 } catch (error) {
   res.status(400).json({ message: error.message });
 }
};
