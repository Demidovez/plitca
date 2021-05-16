import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
// import style from "../styles/Index.module.scss";
import products from "../../data/products.json";

export default function Product({ product }) {
  const router = useRouter();

  if (!product) return <div></div>;

  return (
    <>
      <Head>
        <title>Каталог тротуарной плитки</title>
        <meta
          name="description"
          content="Брусчатка, бордюры, водостоки для тротуаров &#10004; Выгодная цена &#10004; Производство в Минске &#10004; Большой выбор цветов &#10004; Доставка &#128222;+375 (29) 11-11-111"
        />
        <meta name="keywords" content="" />
      </Head>

      <div>Каталог/{router.query.url}</div>
      <div>Товар: {product.title}</div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: products.map(({ url }) => ({ params: { url } })),
    fallback: false,
  };
}

export async function getStaticProps(ctx) {
  const product = products.find((product) => product.url === ctx.params.url);

  return {
    props: {
      product,
    },
  };
}
