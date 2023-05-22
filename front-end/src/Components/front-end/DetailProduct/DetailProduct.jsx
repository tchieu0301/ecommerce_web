import React, { useEffect } from "react";
import NavCart from "../nav/navCart";
import { useProductContext } from "../../../contexts/ProductContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./DetailProduct.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const productContext = useProductContext();
  // function isLogin() {
  //   if (productContext.cookies.username) {
  //     alert("Cho thanh toan");
  //   } else navigate("/LoginPage");
  // }
  const addToCart = (item) => {
    productContext.setCart((s) => s + 1);

    const exist = productContext.productsOfCart.find(
      (cart) => cart.id === item.id
    );
    if (exist) {
      productContext.setProductOfCart(
        productContext.productsOfCart.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      productContext.setProductOfCart([
        ...productContext.productsOfCart,
        { ...item, qty: 1 },
      ]);
    }

    productContext.setTotal((total) => total + item.price);
  };

  useEffect(() => {
    const getAllPRoduct = () =>
      axios
        .get(`http://localhost:9000/getDetailData/${id}`)
        .then((res) => {
          setProduct(res.data, { qty: 1 });
          console.log(res.data);
        })
        .catch((err) => console.log(err));

    getAllPRoduct();
  }, []);
  console.log(id);

  if (!product) return;
  return (
    <>
      <NavCart cart={productContext.cart} />
      <h2 className="detail">{product.name}</h2>
      <hr />
      <Row lg={3} md={1} sm={1}>
        <Col key={product.id} className="productstyle">
          <img src={product.imageUrl} alt={product.name} />
        </Col>
        <Col>
          <h1 className="price">{product.price}$</h1>
          <div className="free-ship">
            <LocalShippingIcon /> Miễn phí vận chuyển toàn quốc
          </div>
          <button onClick={() => addToCart(product)} className="add-to-cart">
            <AddShoppingCartIcon /> Thêm vào giỏ hàng
          </button>
        </Col>
        <Col>
          <h2 className="detail">Thông tin chi tiết</h2>
          {product.detail}
          <br />
          <h5>Thiết kế mỏng nhẹ</h5>
          {product.architecture}
          <br />
          <h5>Hiệu năng cực khủng</h5>
          {product.performance}
        </Col>
      </Row>
    </>
  );
}
