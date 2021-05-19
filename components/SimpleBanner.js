import { useRouter } from "next/router";
import style from "../styles/SimpleBanner.module.scss";
import simple_banner_bg from "../assets/images/simple_banner_bg.jpg";
import { Grid, Row, Col } from "rsuite";

export default function SimpleBanner({ pages }) {
  const router = useRouter();

  const currentPageUrl =
    router.asPath === "/" ? "" : router.asPath.split("/").pop();

  const page = pages.find((page) => page.url === currentPageUrl);

  if (page.bannerTitle) {
    return (
      <div
        className={style.simple_banner}
        style={{ backgroundImage: `url(${simple_banner_bg})` }}
      >
        <div className={style.container}>
          <Grid>
            <Row>
              <Col xs={16} sm={16} md={16} lg={16}>
                <h1
                  data-sal="fade"
                  style={{ "--sal-duration": "1.1s", "--sal-delay": "0.1s" }}
                >
                  {page.bannerTitle}
                </h1>
                {page.bannerDesc && (
                  <p
                    data-sal="fade"
                    style={{ "--sal-duration": "1.1s", "--sal-delay": "0.4s" }}
                  >
                    {page.bannerDesc}
                  </p>
                )}
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
