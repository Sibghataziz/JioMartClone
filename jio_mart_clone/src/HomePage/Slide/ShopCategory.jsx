// import { Box,  Text } from "@chakra-ui/react";
// import { useRef } from "react";
// import { useEffect } from "react";
// import { shopCategory } from "../data";
// import Slider from "react-slick";
// import styles from "./Shop.module.css";
// // import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// // import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
// import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

// function ShopCategory(){
//         var settings = {
//             dots: false,
//             infinite: false,
//             speed: 500,
//             slidesToShow: 6,
//             slidesToScroll: 6,
//             initialSlide: 0,
//             arrow:true,
//             responsive: [
//               {
//                 breakpoint: 1024,
//                 settings: {
//                   slidesToShow: 3,
//                   slidesToScroll: 3,
//                   infinite: true,
//                   dots: true
//                 }
//               },
//               {
//                 breakpoint: 600,
//                 settings: {
//                   slidesToShow: 2,
//                   slidesToScroll: 2,
//                   initialSlide: 2
//                 }
//               },
//               {
//                 breakpoint: 480,
//                 settings: {
//                   slidesToShow: 1,
//                   slidesToScroll: 1
//                 }
//               }
//             ]
//           };

//   const sliderRef = useRef(null);

//   //dependency ===>
//   useEffect(()=>{
//     console.log(sliderRef );
//   },[]);

//        return(
//         <div className={styles.main}>
//             <Box>
//                <Text as={"b"} fontSize='xl' m={"3rem"} >Shop from Top Categories</Text>
//             </Box>

//      <div className={styles.forflex}>
//         <div className={styles.leftBtn} onClick={()=> sliderRef.current.slickPrev()}>
//             <ChevronLeftIcon  style={{fontSize:"3rem", color:"#E2E8F0", fontWeight:"100"  }}/>
//         </div>
//         <div className={styles.contain}>
//             <Slider ref={sliderRef}{...settings} >
//                 {
//                   <div className={styles.flex}>
//                    { shopCategory.map((list,i)=>{
//                         return(
//                            <img className={styles.items} style={{height:"15rem",width:"12rem"}} src={list.image} alt="{list.pic}" />
//                         )
//                     })}
//                       </div>
//                 }
//             </Slider>
//         </div>

//          <div className={styles.rightBtn} onClick={()=> sliderRef.current.slickNext()}>
//         <ArrowForwardIos   style={{fontSize:"3rem", color:"#E2E8F0"  }}/>

//          </div>
//          </div>

//         </div>
//        )
//  }
//  export default ShopCategory;
//=======================>

import { Box, Img, Slider, Text, WrapItem } from "@chakra-ui/react";
import { useRef } from "react";
import { useEffect } from "react";
import { shopCategory } from "../data";
import styles from "./Shop.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Carousel from "react-elastic-carousel";

function ShopCategory() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 406, itemsToShow: 3, itemsToScroll: 3 },
    { width: 800, itemsToShow: 6, itemsToScroll: 6 },
    { width: 1200, itemsToShow: 5, itemsToScroll: 5 },
  ];
  const sliderRef = useRef(null);

  //dependency ===>
  useEffect(() => {
    console.log(sliderRef);
  }, []);

  return (
    <div>
      <Box>
        <Text as={"b"} fontSize="xl" m={"3rem"}>
          Shop from Top Categories
        </Text>
      </Box>

      <div className={styles.forflex}>
        <div
          // className={styles.leftBtn}
          onClick={() => sliderRef.current.slickPrev()}
        ></div>
        <Box bg="white" w="100%">
          <Carousel breakPoints={breakPoints}>
            {shopCategory.map((item) => (
              <Box
                m="5px"
                alignItems="center"
                textAlign={"center"}
                key={item.item_id}
              >
                <Img className={styles.items} src={item.image} />
              </Box>
            ))}
          </Carousel>
        </Box>
        <div onClick={() => sliderRef.current.slickNext()}></div>
      </div>
    </div>
  );
}
export default ShopCategory;
