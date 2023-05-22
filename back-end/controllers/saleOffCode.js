import { SaleOffCode } from "../schemas/saleoff.js";

export function saleOff(req, res, next) {
  try {
    const {  code } = req.body;
    const saleOffCode = new SaleOffCode();
    saleOffCode.code = code;
    // saleOffCode.value = value;
    saleOffCode.save();
    return res.status(200).json({
      msg: "Code is created",
      data: saleOffCode,
    });
  } catch (error) {
    console.log("Can't POST request");
  }
}
