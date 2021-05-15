import style from "../styles/Header.module.scss";
import { Grid, Row, Col, Dropdown, Icon, Modal, Button } from "rsuite";
import { useEffect, useState, forwardRef } from "react";
import useWindowSize from "../hooks/useWindowSize";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import logo_bg from "../assets/images/logo_bg.svg";

const LinkPage = forwardRef((props, ref) => {
  const { href, as, ...rest } = props;

  return (
    <Link href={href} as={as}>
      <a ref={ref} {...rest} />
    </Link>
  );
});

export default function Header({ headerNav }) {
  const [showModallOrderCall, setShowModalOrderCall] = useState(false);
  const [isCollapseMenu, setIsCollapseMenu] = useState(false);
  const [isMobileSize, setIsMobileSize] = useState(false);
  const [width] = useWindowSize();

  useEffect(() => setIsMobileSize(width <= 991), [width]);

  const toggleCollapseMenu = () => setIsCollapseMenu(!isCollapseMenu);

  const toggleShowModalOrderCall = () =>
    setShowModalOrderCall(!showModallOrderCall);

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
                <Dropdown.Item
                  componentClass={LinkPage}
                  href="tel:+375291111111"
                >
                  +375 (29) 11-11-111
                </Dropdown.Item>
                <Dropdown.Item componentClass={LinkPage} href="/kontakty">
                  Пн-Сб: 08:00-18:00
                </Dropdown.Item>
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
            <Col xs={4} sm={10} md={4}>
              <button className={style.logo}>
                <img src={logo_bg} alt="logo" />
                <span>PLITCA.BY</span>
              </button>
            </Col>
            <Col xs={10} sm={14} md={20}>
              {isMobileSize ? (
                <Button
                  onClick={toggleCollapseMenu}
                  className={style.toggle_nav}
                >
                  <Icon icon="bars" size="2x" />
                </Button>
              ) : (
                <DesktopNav headerNav={headerNav} />
              )}
            </Col>
          </Row>
          {isMobileSize && (
            <Row>
              <Col xs={24} sm={24} md={24}>
                <MobileNav
                  onToggle={toggleCollapseMenu}
                  show={isCollapseMenu}
                  headerNav={headerNav}
                />
              </Col>
            </Row>
          )}
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
