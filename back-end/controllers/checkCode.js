import { SaleOffCode } from "../schemas/saleoff.js";

export default async function checkCode(req, res, next) {
  try {
    const { code } = req.body;
    const data = await SaleOffCode.findOne({ code });
    if (data) {
      res.status(200).json({ msg: "matched", data: data });
    } else {
      res.status(401).json({ msg: "cannot find" });
    }
  } catch (error) {
    console.log(error);
  }
}
