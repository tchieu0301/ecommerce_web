import { ProductData } from "../schemas/products.js";

export function addDataProduct(req, res, next) {
  try {
    const { id, name, brand, price, imageUrl, detail, architecture, performance } = req.body;
    const productData = new ProductData();
    productData.id = id;
    productData.name = name;
    productData.brand = brand;
    productData.price = price;
    productData.imageUrl = imageUrl;
    productData.detail = detail;
    productData.architecture = architecture;
    productData.performance = performance;
    productData.save();
    return res.status(200).json({
      msg: "Data is created",
      data: productData,
    });
  } catch (error) {
    console.log("Can't POST request");
  }
}
