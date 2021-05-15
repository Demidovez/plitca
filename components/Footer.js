import style from "../styles/Footer.module.scss";
import logo_bg from "../assets/images/logo_bg.svg";
import { Grid, Row, Col, Modal, Icon, Button } from "rsuite";
import { useState } from "react";
import Link from "next/link";

export default function Footer({ footerNav }) {
  const [showModallOrderCall, setShowModalOrderCall] = useState(false);

  const toggleShowModalOrderCall = () =>
    setShowModalOrderCall(!showModallOrderCall);

  return (
    <footer className={style.footer}>
      <Grid>
        <Row>
          <Col xs={8} sm={8} md={8}>
            <button className={style.logo}>
              <img src={logo_bg} alt="logo" />
              <span>PLITCA.BY</span>
            </button>
            <p>ООО "ЫОВЫФДФЫВФЫВФЫВФЫ" © 2010-2021</p>
            <p>Производство, продажа и укладка тротуарной плитки в Минске</p>
          </Col>
          {footerNav.map((category) => (
            <Col xs={4} sm={4} md={4} key={category.id}>
              <p className={style.label_category}>{category.label}</p>
              <ul>
                {category.children.map((page) => (
                  <li key={page.id}>
                    <Link href={`/${page.url}`}>
                      <a>{page.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>

        <Row>
          <Col xs={8} sm={8} md={8}></Col>
          <Col xs={8} sm={8} md={8}>
            <a href="tel:+375291111111">+375 (29) 11-11-111</a>
          </Col>
          <Col xs={4} sm={4} md={4}>
            Пн-Сб: 08:00-18:00
          </Col>
          <Col xs={4} sm={4} md={4}>
            <button
              className={style.order_call}
              onClick={toggleShowModalOrderCall}
            >
              <Icon icon="phone" /> ЗАКАЗАТЬ ЗВОНОК
            </button>
          </Col>
        </Row>
      </Grid>

      <Modal show={showModallOrderCall} onHide={toggleShowModalOrderCall}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>text</div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={toggleShowModalOrderCall} appearance="primary">
            Ok
          </Button>
          <Button onClick={toggleShowModalOrderCall} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
}
