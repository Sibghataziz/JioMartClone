import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Input, InputGroup, InputLeftAddon, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Registration = () => {
  return (
    <Box>
    <Heading fontSize='25px'  as='h2' >Sign in</Heading>
      <Text mb='50px'>Sign in to access your Orders, Offers and Wishlist.</Text>
     
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftAddon bg={'white'} fontWeight={'bold'} color='black' children='+91' />
          <Input  type='tel' placeholder='Enter your mobile no' /> 
        </InputGroup>
        
        <Box pl={'50%'}><Button fontSize={'30px'} width={'50px'} size='lg' borderRadius='50%' colorScheme='blue'><ChevronRightIcon /></Button></Box>
      </Stack>
    </Box>
  )
}

export default Registration