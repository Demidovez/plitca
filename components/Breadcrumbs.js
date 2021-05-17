import style from "../styles/Breadcrumbs.module.scss";
import { Grid } from "rsuite";
import Link from "next/link";
import { useRouter } from "next/router";
import products from "../data/products.json";
import pages from "../data/pages.json";

export default function Breadcrumbs() {
  const router = useRouter();

  const breadcrumbUrls =
    router.asPath === "/" ? [""] : router.asPath.split("/");

  const renderBreadcrumb = (url, index) => {
    const page =
      products.find((product) => product.url === url) ||
      pages.find((page) => page.url === url);

    if (url === "") {
      return (
        <li key="home">
          <Link href="/">
            <a>Главная</a>
          </Link>
        </li>
      );
    }

    if (page && index !== breadcrumbUrls.length - 1) {
      return (
        <li key={url}>
          <Link href={`/${page.url}`}>
            <a>{page.title}</a>
          </Link>
        </li>
      );
    }

    if (page && index === breadcrumbUrls.length - 1) {
      return <li key={url}>{page.title}</li>;
    }

    return <li key={url}>?</li>;
  };

  return (
    <div
      className={`${style.breadcrumbs} ${
        breadcrumbUrls.length > 1 ? "show" : "hide"
      } breadcrumbs`}
    >
      {breadcrumbUrls.length > 1 ? (
        <Grid>
          <ul>
            {breadcrumbUrls.map((url, index) => renderBreadcrumb(url, index))}
          </ul>
        </Grid>
      ) : null}
    </div>
  );
}
