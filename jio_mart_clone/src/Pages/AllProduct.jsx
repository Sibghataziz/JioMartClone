import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Categories from "../Components/Categories";
import ListOfProducts from "../Components/ListOfProducts";
import Path from "../Components/Path";
import Filters from "../Components/Filters";
import ProductBanner from "../Components/ProductBanner";
import Sort from "../Components/Sort";
import MiniSort from "../Components/MiniSort";

export default function AllProduct() {
  const [windowWidth, setWindowWidth] = useState(window.outerWidth);

  const handleResize = () => {
    if((windowWidth>770 && window.outerWidth<770) || (windowWidth<770 && window.outerWidth>770)){
        setWindowWidth(window.outerWidth)
    }
    // console.log(windowWidth,window.outerWidth,"hihihih")
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  
  return (
    <Box bg={"#F3F3F3"}>
      <Path />
      <Flex justify="space-between">
        {windowWidth>770 ? <Box width="23%" mt={5} mb={5}>
          <Categories />
          <Filters />
        </Box>:null}
        <Box width={windowWidth>770?"76%":"100%"} mt={5} mb={5}>
          {windowWidth>770?<><ProductBanner />
          <Sort /></>:<MiniSort/>}
          <ListOfProducts windowWidth={windowWidth}/>
        </Box>
      </Flex>
    </Box>
  );
}
