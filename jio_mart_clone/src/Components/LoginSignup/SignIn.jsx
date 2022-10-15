import { Box, Flex, Image,Text } from '@chakra-ui/react'
import {ChevronRightIcon} from "@chakra-ui/icons"


import React from 'react'
import AccountPage from './AccountPage'
import Registration from './Registration'
import SignUp from './SignUp'

const SignIn = () => {
  return (<>
    <Flex justifyContent={'center'} backgroundColor={'whitesmoke'} border='1px solid black' p='50px 150px' >
    <Box bg={'white'} w={'50%'} >
      <Image borderTopLeftRadius={'20px'} src='https://www.jiomart.com/msassets/images/login-banner.jpg'  />
    </Box>
    
    <Box w={'50%'} borderTopRightRadius={'20px'}  bgColor={'white'}  p={'50px 50px'}>
      <Registration />
      {/* <SignUp /> */}

     
      {/* <Heading fontSize='25px'  as='h2' >Sign in</Heading>
      <Text mb='50px'>Sign in to access your Orders, Offers and Wishlist.</Text>
     
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftAddon bg={'white'} fontWeight={'bold'} color='black' children='+91' />
          <Input  type='tel' placeholder='Enter your mobile no' /> 
        </InputGroup>
        
        <Box pl={'50%'}><Button fontSize={'30px'} width={'50px'} size='lg' borderRadius='50%' colorScheme='blue'><ChevronRightIcon /></Button></Box>
      </Stack> */}
     

    </Box>
  </Flex>
  <Text fontWeight={'normal'}  mt={'10px'} fontSize={'sm'} textAlign={'center'}>By continuing you agree to our <Text as={'span'} color={'red'}>Terms of service</Text> <br /> and <Text as={'span'} color={'red'}>Privacy & Legal Policy.</Text></Text>
  <AccountPage />
  </>
  )
}

export default SignIn