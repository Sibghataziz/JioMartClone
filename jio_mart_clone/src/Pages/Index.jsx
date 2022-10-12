import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react"
import ShopCategory from "../HomePage/Slide/ShopCategory";
import TopDealSlides from "../HomePage/Slide/TopDealSlides";
import Slider from "../HomePage/Slider";


  function Index(){


    return(
      <div>

        <Box>     
           {/* <Box mt="2">
               <img src="https://www.jiomart.com/images/cms/section/images/1665073593_Countdown-Creative_1240x200_web.jpg" alt="bast_Sale" />
           </Box> */}

        <Box mt={2}>
                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1654714506_Free-Home-Delivery--strip-1240-X-162.jpg" alt="lowerBaner "/>
           </Box>

          <Flex mt={'2'}>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1665425391_Camp-A-Desktop.jpg" alt="" />
          </Flex>

        <Box mt={2}>
                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1662531217_Wednesday_Bonus.jpg" alt="lowerBaner "/>
           </Box>

          <Box>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664448687_Image_3.jpg" alt="" />
          </Box>

          <Box>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1665072906_Oct-6_Slim-Banner_web.jpg" alt="" />
          </Box>

        {/* ShopCategory ======>*/}
             <ShopCategory/>
        

        <Link to="./"><Box>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1624041574_web_static.jpg" alt="" />
          </Box ></Link>

           <Text as='b'  fontSize='xl' m="3rem" marginY={'3rem'}>Top Deals</Text>
             
          {/* Top Deals====> */}
             <TopDealSlides/>
             
             <Flex >
                <Box border="1px solid black" m={'2'} >
                    <img src="https://www.jiomart.com/images/product/150x150/491349617/cadbury-celebration-chocolate-186-6-g-product-images-o491349617-p491349617-0-202207041226.jpg" alt="" />
                    <Text>Nivea Soft Light Playful Peach Moisturizer</Text>
                    <Text>₹ 174.00</Text>
                    <Button bg="#008ecc" color={'white'} w={'30%'}>Add to Cart</Button>
                </Box>
                <Box border="1px solid black" m={'2'}>
                    <img src="https://www.jiomart.com/images/product/150x150/491349617/cadbury-celebration-chocolate-186-6-g-product-images-o491349617-p491349617-0-202207041226.jpg" alt="" />
                    <Text>Nivea Soft Light Playful Peach Moisturizer</Text>
                    <Text>₹ 174.00</Text>
                    <Button bg="#008ecc" color={'white'} w={'30%'}>Add to Cart</Button>
                </Box>
                <Box border="1px solid black" m={'2'}>
                    <img src="https://www.jiomart.com/images/product/150x150/491349617/cadbury-celebration-chocolate-186-6-g-product-images-o491349617-p491349617-0-202207041226.jpg" alt="" />
                    <Text>Nivea Soft Light Playful Peach Moisturizer</Text>
                    <Text>₹ 174.00</Text>
                    <Button bg="#008ecc" color={'white'} w={'30%'}>Add to Cart</Button>
                </Box>
                <Box border="1px solid black" m={'2'}>
                    <img src="https://www.jiomart.com/images/product/150x150/491349617/cadbury-celebration-chocolate-186-6-g-product-images-o491349617-p491349617-0-202207041226.jpg" alt="" />
                    <Text>Nivea Soft Light Playful Peach Moisturizer</Text>
                    <Text>₹ 174.00</Text>
                    <Button bg="#008ecc" color={'white'} w={'30%'} >Add to Cart</Button>
                </Box>

             </Flex>

            </Box>
        </div>
    )
  }
  export default Index;