import Head from "next/head";
import style from "../../styles/Layout.module.scss";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700&amp;subset=cyrillic"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
