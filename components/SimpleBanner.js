import { useRouter } from "next/router";
import style from "../styles/SimpleBanner.module.scss";

export default function SimpleBanner({ pages }) {
  const router = useRouter();

  const currentPageUrl =
    router.asPath === "/" ? "" : router.asPath.split("/").pop();

  const { bannerTitle, bannerDesc } = pages.find(
    (page) => page.url === currentPageUrl
  );

  if (bannerTitle) {
    return (
      <div className={style.simple_banner}>
        <h1>{bannerTitle}</h1>
        {bannerDesc && <p>{bannerDesc}</p>}
      </div>
    );
  } else {
    return <></>;
  }
}
