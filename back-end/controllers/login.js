import { Account } from "../schemas/authentication.js";
export default async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const data = await Account.findOne({ username, password });
    if (data) {
      res.status(200).json({ msg: "logged", data: data });
    } else {
      res.status(401).json({ msg: "cannot login" });
    }
  } catch (error) {
    console.log(error);
  }
}
