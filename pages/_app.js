import "rsuite/dist/styles/rsuite-default.css";
import "../styles/globals.scss";
import App from "next/app";
import Layout from "../components/Layout";
import allPages from "../data/pages.json";
import headerNavItems from "../data/header_nav.json";
import footerNavItems from "../data/footer_nav.json";

function MyApp({ Component, pageProps, headerNav, footerNav }) {
  return (
    <Layout headerNav={headerNav} footerNav={footerNav}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const headerNav = headerNavItems.map((item) => {
    if (item.children.length) {
      return {
        ...item,
        children: item.children.map((item) => {
          const { url, label } = allPages.find(
            (page) => page.id === item.page_id
          ) || { url: "/", label: "Главная" };

          return {
            ...item,
            url,
            label,
          };
        }),
      };
    } else {
      const { url, label } = allPages.find(
        (page) => page.id === item.page_id
      ) || { url: "/", label: "Главная" };

      return {
        ...item,
        url,
        label,
      };
    }
  });

  const footerNav = footerNavItems.map((item) => ({
    ...item,
    children: item.children.map((item) => {
      const { url, label } = allPages.find(
        (page) => page.id === item.page_id
      ) || { url: "/", label: "Главная" };

      return {
        ...item,
        url,
        label,
      };
    }),
  }));

  return { ...appProps, headerNav, footerNav };
};

export default MyApp;
