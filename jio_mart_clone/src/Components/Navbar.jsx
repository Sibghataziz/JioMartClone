<<<<<<< HEAD
import { Flex, Box, useDisclosure } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Input, Image } from "@chakra-ui/react";
import { useRef } from "react";
import LeftDrawer from "./LeftDrawer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Styles from "./Styles.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const Navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = useRef();
  const [search, setSearch] = useState("");
const {isAuth} = useSelector(state=>state.auth)

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    // console.log(search)
  };
  const handleEnter = (e) => {
    // console.log(search)
    if (e.key === "Enter") {
      if (
        search === "lipcare" ||
        search === "cosmetics" ||
        search === "accessories" ||
        search === "skincare"
      ) {
        Navigate(`/products/makeup`);
      } else if (
        search === "container" ||
        search === "basket" ||
        search === "storage" ||
        search === "blender"
      ) {
        Navigate(`/products/kitchenware`);
      } else if (
        search === "Mobile and Tablet" ||
        search === "mobile" ||
        search === "tv" ||
        search === "Home Appliances" ||
        search === "Computers"
      ) {
        Navigate(`/products/Electronics`);
      } else {
        <Link to={`/*`}></Link>;
      }
    }
  };

  return (
    <>
      <div className={Styles.navbar}>
        <Flex bg="#008ecc" p="6px" align="center" justify="space-evenly">
          <IconButton
            colorScheme="#008ecc"
            size="xxl"
            icon={<HamburgerIcon color="#fff" bg="#008ecc" w={8} h={8} />}
            onClick={onOpen}
            ref={btnRef}
          />
          <Box>
            {" "}
            <Link to={`/`}>
            <Image
              className={Styles.image}
              cursor={"pointer"}
              src="https://www.jiomart.com/assets/version1664452279/smartweb/images/jiomart_logo_beta.svg"
              alt="Jio Icon"
            />
            </Link>
          </Box>
          <Input
            size={"md"}
            value={search}
            onChange={handleChange}
            onKeyDown={handleEnter}
            placeholder="Search essentials, groceries, and more..."
            bg="#fff"
            w="700px"
          />
          <Box display={"flex"} justifyContent="space-between">
            <Link to={`/account${isAuth?"":'/login'}`}>
              <Box
                display={"flex"}
                pr="20px"
                color="white"
                cursor={"pointer"}
                mr="20px"
              >
                <img
                  src="https://www.jiomart.com/msassets/images/icons/loginicon_be.svg"
                  height="10px"
                  width="24px"
                  alt=""
                />
                {isAuth ? "My Account" : "SignIn/SignUp"}
              </Box>
            </Link>
            <Link to="/checkout/cart">
              <Box display={"flex"} color="white" cursor={"pointer"}>
                <img
                  src="	https://www.jiomart.com/msassets/images/icons/cart-white.svg"
                  height="24px"
                  width="24px"
                  alt=""
                />
                Cart
              </Box>
            </Link>
          </Box>
        </Flex>

        <LeftDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      </div>
    </>
  );
};
export default Navbar;
=======
import { Flex, Box, useDisclosure, } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';
import { Input , Image } from '@chakra-ui/react';
import { useRef } from 'react';
import LeftDrawer from './LeftDrawer';
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';
import Styles from "./Styles.module.css"



const Navbar=()=>{
    const Navigate=useNavigate();
    const { isOpen, onClose,onOpen } = useDisclosure()
    const btnRef=useRef();
    const [search,setSearch]=useState("")

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
        console.log(search)
    }
    const handleEnter=(e)=>{
        console.log(search)
        if(e.key==="Enter"){
            if(search==="lipcare"||search=== "cosmetics"||search=== "accessories"||search=== "skincare")
            {Navigate(`/products/makeup`)} 
            else if(search==="container"||search=== "basket"||search=== "storage"||search=== "blender")
            {Navigate(`/products/kitchenware`)} 
            else if(search==="Mobile and Tablet"||search==='mobile'||search=== "tv"||search=== "Home Appliances"||search=== "Computers")
            {Navigate(`/products/Electronics`)}  
            else {<Link to={`/*`}></Link>}

        }
    }



    

    return(
        <>
        <div className={Styles.navbar}>
        <Flex bg='#008ecc'  p="6px"  align="center" justify="space-evenly"  >
            <IconButton colorScheme='#008ecc' size='xxl' icon={<HamburgerIcon  color='#fff' bg='#008ecc' w={8} h={8} />}  onClick={onOpen} ref={btnRef}/>
           <Box > <Image className={Styles.image}  cursor={'pointer'} src="https://www.jiomart.com/assets/version1664452279/smartweb/images/jiomart_logo_beta.svg" alt="Jio Icon" /></Box>
            <Input size={'md'} value={search} onChange={handleChange} onKeyDown={handleEnter} placeholder='Search essentials, groceries, and more...'  bg='#fff' w="700px"/>
            <Box display={"flex"} justifyContent="space-between">
            <Box display={"flex"} pr="20px" color="white" cursor={'pointer'} mr='20px'>
                <img src="https://www.jiomart.com/msassets/images/icons/loginicon_be.svg" height="10px" width="24px" alt="" />
                Sign in
            </Box>
            <Box display={"flex"} color="white" cursor={'pointer'}  >
                <img src="	https://www.jiomart.com/msassets/images/icons/cart-white.svg" height="24px" width="24px" alt="" />
                Cart
            </Box>
            </Box>
        </Flex>
        
        <LeftDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
        </div>
        </>
    )
}
export default Navbar

>>>>>>> main
