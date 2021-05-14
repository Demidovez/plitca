import style from "../../styles/Header.module.scss";
import { forwardRef } from "react";
import {
  Grid,
  Row,
  Col,
  Dropdown,
  Nav,
  Icon,
  Modal,
  Button,
  Sidenav,
} from "rsuite";
import { useState } from "react";
import { Animation } from "rsuite";

// import logoBackground from "../../public/logo_bg.svg";

const Panel = forwardRef(({ ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    style={{
      overflow: "hidden",
    }}
  >
    <Sidenav>
      <Sidenav.Body>
        <Nav className={style.navigation}>
          <Nav.Item>Каталог</Nav.Item>
          <Dropdown title="Услуги">
            <Dropdown.Item>Укладка тротуарной плитки</Dropdown.Item>
            <Dropdown.Item>Демонтаж плитки</Dropdown.Item>
            <Dropdown.Item>Дренаж участка</Dropdown.Item>
            <Dropdown.Item>Отмостка дома</Dropdown.Item>
          </Dropdown>
          <Dropdown title="Покупателям">
            <Dropdown.Item>Оплата</Dropdown.Item>
            <Dropdown.Item>Оптом</Dropdown.Item>
            <Dropdown.Item>Доставка и самовывоз</Dropdown.Item>
            <Dropdown.Item>Возврат</Dropdown.Item>
            <Dropdown.Item>Прайс-лист</Dropdown.Item>
            <Dropdown.Item>Отзывы</Dropdown.Item>
            <Dropdown.Item>Лицензии и сертификаты</Dropdown.Item>
            <Dropdown.Item>Рассрочка и кредит</Dropdown.Item>
            <Dropdown.Item>Производство</Dropdown.Item>
          </Dropdown>
          <Nav.Item>Статьи</Nav.Item>
          <Nav.Item>О компании</Nav.Item>
          <Nav.Item>Контакты</Nav.Item>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
));

export default function Header() {
  const [showModallOrderCall, setShowModalOrderCall] = useState(false);
  const [isCollapseMenu, setIsCollapseMenu] = useState(false);

  const toggleShowModalOrderCall = () =>
    setShowModalOrderCall(!showModallOrderCall);

  const toggleCollapseMenu = () => setIsCollapseMenu(!isCollapseMenu);

  return (
    <header>
      <div className={`${style.header} ${style.top_header}`}>
        <Grid>
          <Row>
            <Col xs={20} sm={24} md={13}>
              <div className={style.slogan}>
                Производство, продажа и укладка тротуарной плитки в Минске
              </div>
            </Col>
            <Col xs={4} sm={24} md={6}>
              <Dropdown
                title="+375 (29) 11-11-111"
                className={style.phone}
                toggleComponentClass={Button}
                appearance="link"
              >
                <Dropdown.Item>+375 (29) 11-11-111</Dropdown.Item>
                <Dropdown.Item>Пн-Сб: 08:00-18:00</Dropdown.Item>
              </Dropdown>
            </Col>
            <Col xs={24} sm={24} md={5}>
              <button
                className={style.order_call}
                onClick={toggleShowModalOrderCall}
              >
                <Icon icon="phone" /> ЗАКАЗАТЬ ЗВОНОК
              </button>
            </Col>
          </Row>
        </Grid>
      </div>
      <nav className={`${style.header} ${style.bottom_header}`}>
        <Grid>
          <Row>
            <Col xs={4} sm={4} md={4}>
              <button className={style.logo}>
                <img src="./logo_bg.svg" alt="logo" />
                <span>PLITCA.BY</span>
              </button>
            </Col>
            <Col xs={20} sm={20} md={20}>
              <Nav className={style.navigation}>
                <Nav.Item>Каталог</Nav.Item>
                <Dropdown title="Услуги">
                  <Dropdown.Item>Укладка тротуарной плитки</Dropdown.Item>
                  <Dropdown.Item>Демонтаж плитки</Dropdown.Item>
                  <Dropdown.Item>Дренаж участка</Dropdown.Item>
                  <Dropdown.Item>Отмостка дома</Dropdown.Item>
                </Dropdown>
                <Dropdown title="Покупателям">
                  <Dropdown.Item>Оплата</Dropdown.Item>
                  <Dropdown.Item>Оптом</Dropdown.Item>
                  <Dropdown.Item>Доставка и самовывоз</Dropdown.Item>
                  <Dropdown.Item>Возврат</Dropdown.Item>
                  <Dropdown.Item>Прайс-лист</Dropdown.Item>
                  <Dropdown.Item>Отзывы</Dropdown.Item>
                  <Dropdown.Item>Лицензии и сертификаты</Dropdown.Item>
                  <Dropdown.Item>Рассрочка и кредит</Dropdown.Item>
                  <Dropdown.Item>Производство</Dropdown.Item>
                </Dropdown>
                <Nav.Item>Статьи</Nav.Item>
                <Nav.Item>О компании</Nav.Item>
                <Nav.Item>Контакты</Nav.Item>
              </Nav>
              <Button onClick={toggleCollapseMenu}>toggle</Button>
              <Animation.Collapse in={isCollapseMenu}>
                {(props, ref) => <Panel {...props} ref={ref} />}
              </Animation.Collapse>
            </Col>
          </Row>
        </Grid>
      </nav>

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
    </header>
  );
}
