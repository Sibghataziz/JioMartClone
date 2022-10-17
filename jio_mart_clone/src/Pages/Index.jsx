import {
  Box,
  Flex,
  Img,
  Link,
} from "@chakra-ui/react";
import RecomendedSlide from "../HomePage/Slide/RecomendedSlide";
import ShopCategory from "../HomePage/Slide/ShopCategory";
import TopDealSlides from "../HomePage/Slide/TopDealSlides";
import styles from "../HomePage/HomePageCss/Section.module.css";
import {
  groceries,
  SmallWomenData,
  BigWomenData,
  downData,
  BigMenData,
  posterimg,
  Personal,
  mensdata,
  WowDeal,
} from "../HomePage/data";
import Categorydata from "../HomePage/Slide/Category";
import Kids from "../HomePage/Slide/Kids";

function Index() {
  return (
    <div>
      <Box>
        <Box>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1665654011_SBI_Unit.jpg"
            alt="bast_Sale"
          />
        </Box>

        <Box>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1654714506_Free-Home-Delivery--strip-1240-X-162.jpg"
            alt="lowerBaner "
          />
        </Box>

        <Flex>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1665425391_Camp-A-Desktop.jpg"
            alt=""
          />
        </Flex>

        <Box m={2} >
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1662531217_Wednesday_Bonus.jpg"
            alt="lowerBaner "
          />
        </Box>

        <Box m={2}>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664448687_Image_3.jpg"
            alt=""
          />
        </Box>

        <Box m={2}  >
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1665072906_Oct-6_Slim-Banner_web.jpg"
            alt=""
          />
        </Box>

        {/* ShopCategory ======>*/}
        {/* if u need Rap it inside the Link */}
        <ShopCategory />
        <Link to="./">
          <Box m={2}  mt={'1rem'} >
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
          <Box m={2} mt={"-0.4rem"} >
            <Img
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1665657938_Fav-Delicacies-1680-320.jpg"
              alt=""
            ></Img>
          </Box>
        </div>

        {/* h3,handle it==>manualy  */}

        <Categorydata />

        <Link to="/">
          <div className={styles.groceries}>
            <h3 class={styles.text}>Offers on daily essentials</h3>
            <div className={styles.groceriesD}>
              {groceries.map((grow) => (
                <Box className="deal">
                  <div className={styles.Choco}>
                    <img
                      className={styles.groom}
                      style={{ border: "1rem" }}
                      src={grow.image}
                      alt=""
                    />
                  </div>
                </Box>
              ))}
            </div>
          </div>
        </Link>

        <div></div>

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
                    alt="wom"
                  />
                </div>
              ))}
            </div>
          </div>
        </Link>

        {/* small owmens====>  */}

        <Link to="/">
          <div className={styles.menssmall}>
            <div className={styles.mensfashion}>
              {SmallWomenData.map((women) => (
                <div className={styles.fashion}>
                  <img
                    className={styles.dhoom}
                    style={{ borderRadius: "0.5rem" }}
                    src={women.image}
                    alt="womenn"
                  />
                </div>
              ))}
            </div>
          </div>
        </Link>

        <div className={styles.menimg}>
          <h3 class={styles.text}>Mens Fashion</h3>
          <div className={styles.menf}>
            {BigMenData.map((post) => (
              <div>
                <img
                  className={styles.moon}
                  style={{ borderRadius: "0.5rem" }}
                  src={post.image}
                  alt={post.n}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.menssmall}>
          <div className={styles.mensfashion}>
            {mensdata.map((pro) => (
              <div className={styles.fashion}>
                <img
                  className={styles.dhoom}
                  style={{ borderRadius: "0.5rem" }}
                  src={pro.img}
                  alt={pro.n}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <Box ml={"0.6rem"}  mt={"1rem"}>
            <img
              width={"99.3%"}
              src="https://www.jiomart.com/images/category/563/girls-20200831.jpg"
              alt=""
            />
          </Box>
        </div>

        <Kids />
        {/* Hotdeals */}

        <div className={styles.hotest}>
          <h3 class={styles.text}>Hotest Deals</h3>
          <div className={styles.hotestD}>
            {WowDeal.map((elem) => (
              <div className="deal">
                <img
                  className={styles.zoom}
                  style={{ borderRadius: "0.5rem" }}
                  src={elem.image}
                  alt="deals_n"
                />
              </div>
            ))}
          </div>
        </div>

        <Link to="groceries">
          <div className={styles.groceries}>
            <h3 class={styles.text}>Offers on Household and Personal Care</h3>
            <div className={styles.groceriesD}>
              {Personal.map((grow) => (
                <div className="deal">
                  <div className={styles.Creamy}>
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

        <div className={styles.posterimg}>
          <div className={styles.abovefooter}>
            {posterimg.map((poster) => (
              <div className={styles.poster}>
                <img src={poster.img} alt={poster.n} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.downimg}>
          <div className={styles.abovefooter}>
            {downData.map((downdata) => (
              <div className={styles.poster}>
                <img
                  className={styles.mmm}
                  src={downdata.image}
                  alt="downdata_n"
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
