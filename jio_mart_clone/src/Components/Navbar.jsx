import { Flex, Box, useDisclosure, Img } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';
import { Input , Image } from '@chakra-ui/react';
import { useRef } from 'react';
import LeftDrawer from './LeftDrawer';
import {Link} from 'react-router-dom'
import { useState } from 'react';



const Navbar=()=>{
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
            if(search==="Lipcare"||search=== "Cosmetics"||search=== "accessories"||search=== "Skincare")
            {<Link to={`/products/makeup`}></Link>} 
            else if(search==="container"||search=== "basket"||search=== "storage"||search=== "Blender")
            {<Link to={`/products/kitchenware`}></Link>} 
            else if(search==="Mobile and Tablet"||search=== "TV"||search=== "Home Appliances"||search=== "Computers")
            {<Link to={`/products/Electronics`}></Link>}  
            else {<Link to={`/*`}></Link>}

        }
    }



    

    return(
        <>
        <Flex bg='#008ecc'  p="6px" align="center" justify="space-evenly"  >
            <IconButton colorScheme='#008ecc' size='xxl' icon={<HamburgerIcon  color='#fff' bg='#008ecc' w={8} h={8} />}  onClick={onOpen} ref={btnRef}/>
           <Box w={[80]}> <Image   src="https://www.jiomart.com/assets/version1664452279/smartweb/images/jiomart_logo_beta.svg" alt="Jio Icon" /></Box>
            <Input  value={search} onChange={handleChange} onKeyDown={handleEnter} placeholder='Search essentials, groceries, and more...'  bg='#fff' w="700px"/>
            <Box display={"flex"}>
            <Box display={"flex"} color="white">
                <img src="https://www.jiomart.com/msassets/images/icons/loginicon_be.svg" height="10px" width="24px" alt="" />
                Sign in
            </Box>
            <Box display={"flex"} color="white">
                <img src="	https://www.jiomart.com/msassets/images/icons/cart-white.svg" height="24px" width="24px" alt="" />
                Cart
            </Box>
            </Box>
        </Flex>
        
        <LeftDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
        </>
    )
}
export default Navbar

