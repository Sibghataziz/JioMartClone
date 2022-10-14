import { Box, Button, Flex, Heading, Img, Link, Text } from "@chakra-ui/react";
import EssentialOffers from "../HomePage/Offers/EssentialOffers";
import RecomendedSlide from "../HomePage/Slide/RecomendedSlide";
import ShopCategory from "../HomePage/Slide/ShopCategory";
import TopDealSlides from "../HomePage/Slide/TopDealSlides";
import styles from "../HomePage/HomePageCss/Section.module.css";
import {
  groceries,
  SmallWomenData,
  BigWomenData,
  KidsFashion,
  downData,
} from "../HomePage/data";
import Categorydata from "../HomePage/Slide/Category";

function Index() {
  return (
    <div>
      <Box>
        <Box mt="2">
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1665654011_SBI_Unit.jpg"
            alt="bast_Sale"
          />
        </Box>

        <Box mt={2}>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1654714506_Free-Home-Delivery--strip-1240-X-162.jpg"
            alt="lowerBaner "
          />
        </Box>

        <Flex mt={"2"}>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1665425391_Camp-A-Desktop.jpg"
            alt=""
          />
        </Flex>

        <Box m={2} mt={"1.3rem"}>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1662531217_Wednesday_Bonus.jpg"
            alt="lowerBaner "
          />
        </Box>

        <Box m={2} mt={"1.3rem"}>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664448687_Image_3.jpg"
            alt=""
          />
        </Box>

        <Box m={2} mt={"1.3rem"}>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1665072906_Oct-6_Slim-Banner_web.jpg"
            alt=""
          />
        </Box>

        {/* ShopCategory ======>*/}
        <ShopCategory />

        <Link to="./">
          <Box m={2} mt={"1.3rem"}>
            <img
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1624041574_web_static.jpg"
              alt=""
            />
          </Box>
        </Link>

        {/* Top Deals====> */}
        <TopDealSlides />
        <RecomendedSlide />

        <div>
          <Box m={2} mt={"1.3rem"}>
            <Img
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1665657938_Fav-Delicacies-1680-320.jpg"
              alt=""
            ></Img>
          </Box>
        </div>

        <Link to="/">
          <div className={styles.groceries}>
            <h3 class={styles.text}>Offers on daily essentials</h3>
            <div className={styles.groceriesD}>
              {groceries.map((grow) => (
                <div className="deal">
                  <div className={styles.Choco}>
                    <img
                      className={styles.groom}
                      style={{ border: "1rem" }}
                      src={grow.image}
                      alt={grow.n}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Link>

        <div>
          <Categorydata />
        </div>

        <Link to="/">
          <div className={styles.menimg}>
            <h3 class={styles.text}>Womens Fashion</h3>
            <div className={styles.menf}>
              {BigWomenData.map((wom) => (
                <div className="post">
                  <img
                    className={styles.moon}
                    style={{ borderRadius: "0.5rem" }}
                    src={wom.image}
                    alt={wom.n}
                  />
                </div>
              ))}
            </div>
          </div>
        </Link>

        <Link to="/">
          <div className={styles.menssmall}>
            <div className={styles.mensfashion}>
              {SmallWomenData.map((women) => (
                <div className={styles.fashion}>
                  <img
                    className={styles.dhoom}
                    style={{ borderRadius: "0.5rem" }}
                    src={women.image}
                    alt={women.n}
                  />
                </div>
              ))}
            </div>
          </div>
        </Link>

        <Link to="/fashion">
          <div className={styles.kidssmall}>
            <h3 class={styles.text}>Kid's Fashion</h3>
            <Box display={{ base: "1", sm: "2", lg: "4", xl: "4" }}>
              <div className={styles.kidsfashion}>
                {KidsFashion.map((kids) => (
                  <div className={styles.kids}>
                    <img
                      className={styles.boom}
                      style={{ borderRadius: "0.5rem" }}
                      src={kids.image}
                      alt={kids.n}
                    />
                  </div>
                ))}
              </div>
            </Box>
          </div>
        </Link>

        <div className={styles.posterimg3}>
          <div className={styles.abovefooter}>
            {downData.map((downdata) => (
              <div className={styles.poster}>
                <img
                  className={styles.mmm}
                  src={downdata.image}
                  alt={downdata.n}
                />
              </div>
            ))}
          </div>
        </div>

        {/* <EssentialOffers/> */}
      </Box>
    </div>
  );
}
export default Index;
