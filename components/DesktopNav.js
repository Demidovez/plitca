import style from "../styles/DesktopNav.module.scss";
import Link from "next/link";
import { forwardRef } from "react";
import { Dropdown, Nav } from "rsuite";

const LinkPage = forwardRef((props, ref) => {
  const { href, as, ...rest } = props;

  return (
    <Link href={href} as={as}>
      <a ref={ref} {...rest} />
    </Link>
  );
});

export default function DesktopNav({ headerNav }) {
  return (
    <Nav className={style.navigation}>
      {headerNav &&
        headerNav.map((item) => {
          if (item.children.length) {
            return (
              <Dropdown key={item.id} title={item.label}>
                {item.children.map((item) => (
                  <Dropdown.Item
                    key={item.id}
                    componentClass={LinkPage}
                    href={`/${item.url}`}
                  >
                    {item.label}
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
                    <a>{item.label}</a>
                  </Link>
                )}
              />
            );
          }
        })}
    </Nav>
  );
}
