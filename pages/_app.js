import "rsuite/dist/styles/rsuite-default.css";
import "../styles/globals.scss";
import App from "next/app";
import Layout from "../components/Layout";
import allPages from "../data/pages.json";
import headerNavItems from "../data/header_nav.json";
import footerNavItems from "../data/footer_nav.json";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import sal from "sal.js";
import "sal.js/dist/sal.css";

const anim = sal();

function MyApp({ Component, pageProps, headerNav, footerNav, allPages }) {
  const { asPath, isReady } = useRouter();
  const router = useRouter();
  const [classWrapper, setClassWrapper] = useState("");

  // useEffect(() => {
  //   sal();
  // }, []);

  useEffect(() => {
    anim.update();
  }, [asPath]);

  return (
    <div className={`${classWrapper}`}>
      <Layout headerNav={headerNav} footerNav={footerNav} pages={allPages}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const headerNav = headerNavItems.map((item) => {
    if (item.children.length) {
      return {
        ...item,
        children: item.children.map((item) => {
          const { url, title } = allPages.find(
            (page) => page.id === item.page_id
          ) || { url: "/", title: "Главная" };

          return {
            ...item,
            url,
            title,
          };
        }),
      };
    } else {
      const { url, title } = allPages.find(
        (page) => page.id === item.page_id
      ) || { url: "/", title: "Главная" };

      return {
        ...item,
        url,
        title,
      };
    }
  });

  const footerNav = footerNavItems.map((item) => ({
    ...item,
    children: item.children.map((item) => {
      const { url, title } = allPages.find(
        (page) => page.id === item.page_id
      ) || { url: "/", title: "Главная" };

      return {
        ...item,
        url,
        title,
      };
    }),
  }));

  return { ...appProps, headerNav, footerNav, allPages };
};

export default MyApp;
