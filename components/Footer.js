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
        <Row className={style.nav_wrapper}>
          <Col xs={24} sm={24} md={6} lg={6}>
            <button className={style.logo}>
              <Link href="/">
                <a>
                  <img src={logo_bg} alt="logo" />
                  <span>PLITCA.BY</span>
                </a>
              </Link>
            </button>
            <p>ООО "ЫОВЫФДФЫВФЫВФЫВФЫ" © 2010-2021</p>
            <p>Производство, продажа и укладка тротуарной плитки в Минске</p>
          </Col>
          <Col mdHidden smHidden xsHidden lg={2}></Col>
          {footerNav.map((category, index) => (
            <Col
              xs={12}
              sm={12}
              md={index === 0 ? 6 : 4}
              lg={4}
              key={category.id}
            >
              <p className={style.title_category}>{category.title}</p>
              <ul>
                {category.children.map((page) => (
                  <li key={page.id}>
                    <Link href={`/${page.url}`}>
                      <a>{page.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>

        <Row className={style.contacts_wrapper}>
          <Col smHidden xsHidden md={6} lg={8}></Col>
          <Col xs={24} sm={12} md={6} lg={8} className={style.phone}>
            <a href="tel:+375291111111">+375 (29) 11-11-111</a>
          </Col>
          <Col xsHidden sm={12} mdHidden lgHidden></Col>
          <Col xs={24} sm={12} md={4} className={style.time}>
            Пн-Сб: 08:00-18:00
          </Col>
          <Col xs={24} sm={12} md={8} lg={4} className={style.order_call}>
            <button onClick={toggleShowModalOrderCall}>
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
