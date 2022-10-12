import { Box, Flex, Slider, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { useEffect } from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { shopCategory } from "../data";
import { display, style } from "@mui/system";
function ShopCategory(){


        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 6,
            initialSlide: 0,
            arrow:true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };



  const sliderRef = useRef(null);
  
  //dependency ===>
  useEffect(()=>{
    console.log(sliderRef );
  },[]);




       return(
        <div>
            <Box>
               <Text as={"b"} fontSize='xl' m={"3rem"} >Shop from Top Categories</Text>
            </Box>
         <div >

        <div onClick={()=>sliderRef.current.slickPrev()}>
            <ArrowBackIosIcon  style={{fontSize:"3rem", color:"#E2E8F0", fontWeight:"100"  }}/>
        </div> 
        <div>
            <Slider ref={sliderRef} {...settings}>
                {
                    shopCategory.map((list,inx)=>{
                        return(
                            <div >
                                <img style={{height: "15rem", width:"12rem", display:"flex" }} className="" src={list.image} alt="{list.pic}" />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
         
         <div className="" onClick={()=> sliderRef.current.slickNext()}>
        <ArrowForwardIos   style={{fontSize:"3rem", color:"#E2E8F0", fontWeight:""  }}/>

         </div>
         </div>
        </div>
       )
 }
 export default ShopCategory;