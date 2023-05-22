import { Account } from "../schemas/authentication.js";

export async function register(req, res, next) {
  try {
    const { name, phoneNumber, username, password } = req.body;
    const exist = await Account.findOne({ username });
    if (exist) return res.json({ msg: "exist" });
    const account = new Account();
    account.name = name;
    account.phoneNumber = phoneNumber;
    account.username = username;
    account.password = password;
    account.save();
    return res.status(200).json({
      msg: "Account is created",
      data: account,
    });
  } catch (error) {
    console.log("Can't POST request");
  }
}
