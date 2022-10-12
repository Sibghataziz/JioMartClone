import { useEffect } from "react";
import { useRef } from "react";
import { GrocerieSlider } from "../data";
// import Slider from "../Slider";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { Slider } from "@chakra-ui/react";

  function TopDealSlides(){

    const sliderRef = useRef(null);
    
     useEffect(()=>{
        console.log(sliderRef)
     },[]);



    return(
        <div>
            <div>
                <div className="" onClick={()=>sliderRef.current.slickPrev()}>
                  <ArrowBackIosIcon  style={{fontSize:"3rem", color:"#E2E8F0", fontWeight:"100"  }}/>

                </div>
            </div>

        <div className="">
            <Slider ref={sliderRef}>
                {
                    GrocerieSlider.map((item, inx)=>{
                        return(
                            <div className="">
                                <div className="">
                                    <p>50 % OFF</p>
                                    <img src="https://i.ibb.co/Yd3ZVDg/badge.png" alt="budget" border="0" />
                                    <img src={item.imgSrc} alt="product_Deals" />
                                     <p>{item.heading} <></></p>
                                     <p>{item.price}</p>
                                     <p>{item.mrp}</p>
                                      <p>{item.rupees}</p>
                                      <p>{item.save}</p>
                                       <button>Add to Cart
                                        <img src="https://i.ibb.co/QHDtjF4/plus.png" alt="btnAdd" border="0" />
                                       </button>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
       
       <div className="" onClick={()=> sliderRef.current.slickNext()}>
           <ArrowForwardIos  style={{fontSize:"3rem", color:"#E2E8F0", fontWeight:"100"  }}/>   
          </div>
        </div>
    )
  }
  export default TopDealSlides;