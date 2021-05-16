import style from "../styles/MobileNav.module.scss";
import { forwardRef, useState } from "react";
import Link from "next/link";
import { Dropdown, Nav, Sidenav, Animation } from "rsuite";

const LinkPage = forwardRef((props, ref) => {
  const { href, as, ...rest } = props;

  return (
    <Link href={href} as={as}>
      <a ref={ref} {...rest} />
    </Link>
  );
});

const Navigation = forwardRef(({ ...props }, ref) => {
  const { onToggle, items } = props;
  const [openKeyDropdown, setOpenKeyDropdown] = useState([]);

  const handleClickDropdown = (id) =>
    setOpenKeyDropdown(openKeyDropdown.includes(id) ? [] : [id]);

  return (
    <div
      {...props}
      ref={ref}
      style={{
        overflow: "hidden",
      }}
    >
      <Sidenav
        className={style.sidenav}
        onSelect={onToggle}
        openKeys={openKeyDropdown}
      >
        <Sidenav.Body>
          <Nav className={style.navigation}>
            {items &&
              items.map((item) => {
                if (item.children.length) {
                  return (
                    <Dropdown
                      key={item.id}
                      title={item.title}
                      eventKey={item.id}
                      onClick={() => handleClickDropdown(item.id)}
                    >
                      {item.children.map((item) => (
                        <Dropdown.Item
                          key={item.id}
                          componentClass={LinkPage}
                          href={`/${item.url}`}
                          onSelect={() => setOpenKeyDropdown([])}
                        >
                          {item.title}
                        </Dropdown.Item>
                      ))}
                    </Dropdown>
                  );
                } else {
                  return (
                    <Nav.Item
                      key={item.id}
                      renderItem={() => (
                        <Link href={`/${item.url}`}>
                          <a>{item.title}</a>
                        </Link>
                      )}
                    />
                  );
                }
              })}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
});

export default function MobileNav({ onToggle, show, headerNav }) {
  return (
    <Animation.Collapse in={show}>
      {(props, ref) => (
        <Navigation
          {...props}
          ref={ref}
          onToggle={onToggle}
          items={headerNav}
        />
      )}
    </Animation.Collapse>
  );
}
