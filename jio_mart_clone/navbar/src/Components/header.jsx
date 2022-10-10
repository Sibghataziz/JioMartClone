import { Box } from "@chakra-ui/react"
import Navbar from "./Navbar"
import Navlist from "./Navlist"

const Header=()=>{

    return(
        <Box >
            <Navbar/>
            <Navlist/>
        </Box>
    )
}
export default Header