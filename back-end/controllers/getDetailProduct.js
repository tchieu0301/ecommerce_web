import { ProductData } from "../schemas/products.js";

export default async function getDetailData(req, res, next) {
  try {
    const param = req.params;
    const data = await ProductData.findOne({ id: param.id });
    console.log(data);
    if (data) res.status(200).json(data);
    else res.status(401).json({ msg: "error" });
  } catch (error) {
    console.log(error);
  }
}
