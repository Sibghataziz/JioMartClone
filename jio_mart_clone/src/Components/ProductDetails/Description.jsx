import { Box, Button, Collapse, Heading } from "@chakra-ui/react"
import React from "react"

export default function Description() {
    const [show, setShow] = React.useState(false)
  
    const handleToggle = () => setShow(!show)
  
    return (
      <Box m='auto' width='80%'>
        <Heading size='80px'>Description</Heading>
        <Collapse startingHeight={20} in={show}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </Collapse>
        <Button color={'red'} bg='white' ml='92%' size='sm' onClick={handleToggle} mt='1rem'>
          Show {show ? 'Less' : 'More'}
        </Button>
      </Box>
    )
  }