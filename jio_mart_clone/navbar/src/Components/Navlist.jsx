import { Flex, Box } from "@chakra-ui/react"
import {ChevronDownIcon} from '@chakra-ui/icons';

const Navlist =()=>{
    return (
        <Flex bg='#ececed' h="40px" pl="110px" pr='110px' align="center" justify="space-evenly" color="#000">
            <Box display="flex">
                Groceries
                <ChevronDownIcon/>
            </Box>
            <Box display="flex">
                Premium Fruits
                <ChevronDownIcon/>
            </Box>
            <Box display="flex">
                Home & Kitchen
                <ChevronDownIcon/>
            </Box>
            <Box display="flex">
                Fashion
                <ChevronDownIcon/>
            </Box>
            <Box display="flex">
                Electronics
                <ChevronDownIcon/>
            </Box>
            <Box display="flex">
                Beauty
                <ChevronDownIcon/>
            </Box>
            <Box display="flex">
                Jewellery
                <ChevronDownIcon/>
            </Box>
        </Flex>
    )
}
export default Navlist