 import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  return (
    <Box bg="tomato" p="2">
         <Flex minWidth='max-content' alignItems='center' gap='2'>
           <Box p='2'>
            <Heading size='md'>myCart</Heading>
          </Box>
         <Spacer />
      <ButtonGroup gap='2'>
        <Button colorScheme='teal'>Sign Up</Button>
           <Button colorScheme='teal'>Log in</Button>
    </ButtonGroup>
      </Flex>
    </Box>
  )
}
