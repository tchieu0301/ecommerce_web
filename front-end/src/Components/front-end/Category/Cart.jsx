import React, { useRef } from "react";
import NavCart from "../nav/navCart";
import { useProductContext } from "../../../contexts/ProductContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./CartStyle.css";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";

export default function Cart() {
  const codeRef = useRef(null);
  const navigate = useNavigate();
  const productContext = useProductContext();
  function increaseButton(item) {
    productContext.setCart((s) => s + 1);
    let exist = productContext.productsOfCart.find(
      (cart) => cart.id === item.id
    );

    if (exist) {
      productContext.setProductOfCart(
        productContext.productsOfCart.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      productContext.setTotal((total) => total + item.price);
    }
  }

  function decreaseButton(item) {
    productContext.setCart((s) => s - 1);
    let exist = productContext.productsOfCart.find(
      (cart) => cart.id === item.id
    );

    if (exist) {
      productContext.setProductOfCart(
        productContext.productsOfCart.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
      if (exist.qty === 1) {
        productContext.setProductOfCart(
          productContext.productsOfCart.filter((x) => x.id !== item.id)
        );
      }
      productContext.setTotal((total) => total - item.price);
    }
  }
  const changeRouteToHomePage = () => {
    navigate("/");
  };
  async function checkCode() {
    await axios
      .post("http://localhost:9000/checkCode", {
        code: codeRef.current.value,
      })
      .then(() => {
        productContext.setTotal(
          (total) => total * (1 - codeRef.current.value / 100)
        );
      });
  }
  return (
    <>
      <NavCart cart={productContext.cart} />
      <h1>Sản phẩm của bạn</h1>
      <div className="row">
        <div className="col-xl-6 col-md-8 col-sm-12">
          <Row lg={3} md={3} sm={3}>
            {productContext.productsOfCart.map((item) => (
              <Col className="product-style" key={item.id}>
                <img
                  src={item.imageUrl}
                  className="img-fixed"
                  alt={item.name}
                />
                <h4>{item.price}$</h4>
                <Row lg={3} md={3} sm={3}>
                  <Button onClick={() => decreaseButton(item)}>-</Button>
                  <Col className="amount">
                    <h4>{item.qty}</h4>
                  </Col>
                  <Button onClick={() => increaseButton(item)}>+</Button>
                </Row>
              </Col>
            ))}
          </Row>
        </div>
        <div className="col-xl-6 col-md-4 col-sm-12">
          <Row>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Tên</InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">Địa chỉ</InputGroup.Text>
              <Form.Control id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Số điện thoại</InputGroup.Text>
              <Form.Control aria-label="Amount (to the nearest dollar)" />
            </InputGroup>

            <InputGroup>
              <Button onClick={checkCode}>Mã giảm giá</Button>
              <Form.Control ref={codeRef} />
            </InputGroup>
            <h3>Tổng tiền: {productContext.total}$</h3>
            <Button>Thanh toán</Button>
            <Button
              onClick={changeRouteToHomePage}
              className="back-to-homepage"
            >
              Quay lại trang mua sắm
            </Button>
          </Row>
        </div>
      </div>
    </>
  );
}
