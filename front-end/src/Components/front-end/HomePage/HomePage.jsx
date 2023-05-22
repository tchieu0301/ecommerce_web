import React, { useEffect, useState } from "react";
import Nav from "../nav/nav";

import "./HomePage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useProductContext } from "../../../contexts/ProductContext.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';

export default function HomePage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const productContext = useProductContext();
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
        .get("http://localhost:9000/getAllProduct")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));

    getAllPRoduct();
  }, []);

  console.log(data);
  const detailProduct = (id) => {
    navigate(`/DetailProduct/${id}`);
  };

  return (
    <>
      <Nav cart={productContext.cart} />
      <div>
        <img className="banner" src="./banner.jpg" />
      </div>
      <div className="container">
        <div className="row">
          <div className="best-seller row">
            <h3 className="col-3">Máy tính nổi bật nhất</h3>
            <div className="col-9">
              <button className="btn-brand">
                <img className="img-fixed" src="./LogoBrandImage/MacLogo.png" />
              </button>
            </div>
          </div>
          <Row lg={6} md={4} sm={3}>
            {data.map((item, index) => (
              <Col key={index}>
                <div
                  className="product-style"
                  onClick={() => detailProduct(item.id)}
                >
                  <img
                    src={item.imageUrl}
                    className="img-fixed"
                    alt={item.name}
                  />
                  <div className="row"></div>
                  <div className="col-12">
                    <h6 className="name-style">{item.name}</h6>
                  </div>
                  <div className="col-12">
                    <h4>{item.price}$</h4>
                  </div>
                </div>
                <button
                  className="add-to-cart"
                  role="button"
                  onClick={() => addToCart(item)}
                >
                  Thêm vào giỏ hàng
                </button>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Row lg={3} md={3} sm={1} className="footer">
        <Col className="footer-item"><h5>Welcome to HShop</h5></Col>
        <Col className="footer-item">
          Email: tranconghieu0301@gmail.com
          <br/>
          SĐT: 0394925232
          <div><FacebookIcon />
          <InstagramIcon/></div>
        </Col>
        <Col className="footer-item"></Col>
      </Row>
    </>
  );
}
