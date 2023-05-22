import { ProductData } from "../schemas/products.js";
export default async function getData(req, res, next) {
  try {
    const data = await ProductData.find();
    if (data) res.status(200).json(data);
    else res.status(401).json({ msg: "error" });
  } catch (error) {
    console.log(error);
  }
}
