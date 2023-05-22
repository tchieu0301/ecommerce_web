import { Router } from "express";
import { register } from "../controllers/authentication.js";
import { addDataProduct } from "../controllers/products.js";
import login from "../controllers/login.js";
import getData from "../controllers/getProduct.js";
import getDetailData from "../controllers/GetDetailProduct.js";
import { saleOff } from "../controllers/saleOffCode.js";
import checkCode from "../controllers/checkCode.js";

const route = Router();

route.post("/register", register);
route.post("/login", login);
route.post("/addDataProduct", addDataProduct);
route.post("/saleOffCode", saleOff);
route.post("/checkCode",checkCode);
route.get("/getAllProduct", getData);
route.get("/getDetailData?/:id", getDetailData);

export default route;
