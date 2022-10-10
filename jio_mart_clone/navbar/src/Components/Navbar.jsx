import { Flex, Box, useDisclosure } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';
import { Input } from '@chakra-ui/react';
import { useRef } from 'react';
import LeftDrawer from './LeftDrawer';



const Navbar=()=>{
    const { isOpen, onClose,onOpen } = useDisclosure()
    const btnRef=useRef();



    

    return(
        <>
        <Flex bg='#008ecc' h="80px" pl="150px" pr='150px'pt="10px" align="center" justify="space-evenly" >
            <IconButton  icon={<HamburgerIcon h='40px' />}  onClick={onOpen} ref={btnRef}/>
            <img width={'110px'} height="40px"  src="https://www.jiomart.com/assets/version1664452279/smartweb/images/jiomart_logo_beta.svg" alt="Jio Icon" />
            <Input placeholder='Search essentials, groceries, and more...'  bg='#fff' w="700px"/>
            <Box display={"flex"} color="white">
                <img src="https://www.jiomart.com/msassets/images/icons/loginicon_be.svg" height="24px" width="24px" alt="" />
                Sign in
            </Box>
            <Box display={"flex"} color="white">
                <img src="	https://www.jiomart.com/msassets/images/icons/cart-white.svg" height="24px" width="24px" alt="" />
                Cart
            </Box>
        </Flex>
        
        <LeftDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
        </>
    )
}
export default Navbar