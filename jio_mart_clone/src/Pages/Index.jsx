import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import Slider from "../HomePage/Slider";


  function Index(){
    return(
        <Box>         
        <Box mt="2">
            <img src="https://www.jiomart.com/images/cms/section/images/1665073593_Countdown-Creative_1240x200_web.jpg" alt="bast_Sale" />
        </Box>
        <Box mt={2}>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1654714506_Free-Home-Delivery--strip-1240-X-162.jpg" alt="lowerBaner "/>
        </Box>
        <Flex>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1665425391_Camp-A-Desktop.jpg" alt="" />
        </Flex>
  
          <Box>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664448687_Image_3.jpg" alt="" />
          </Box>

          <Box>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1665072906_Oct-6_Slim-Banner_web.jpg" alt="" />
          </Box>

          <Heading>Shop from Top Categories</Heading>
        
        <Flex>
          <Box>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1661329065_02--Shop-From-Top-Categories-Kitchen-Appliances.jpg" alt="" />
          </Box>
          <Box>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1661329189_02--Shop-From-Top-Categories-audio.jpg" alt="" />
          </Box>
          <Box>
             <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109495_1654018730_Smartphones.jpg" alt="" />
          </Box>
          <Box>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109344_1654018675_Mens-Wear.jpg" alt="" />
          </Box>
          <Box>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109379_1654018684_Womens-Wear.jpg" alt="" />
          </Box>
          </Flex>

          <Box>
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1624041574_web_static.jpg" alt="" />
          </Box >

          <Text as='b'>Top Deals</Text>
             
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
    )
  }
  export default Index;