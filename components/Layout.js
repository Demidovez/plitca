import Head from "next/head";
// import style from "../styles/Layout.module.scss";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";

export default function Layout({ children, headerNav, footerNav }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700&amp;subset=cyrillic"
          rel="stylesheet"
        />
      </Head>
      <Header headerNav={headerNav} />
      <Breadcrumbs />
      <main>{children}</main>
      <Footer footerNav={footerNav} />
    </>
  );
}
