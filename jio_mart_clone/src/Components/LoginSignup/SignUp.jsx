import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Box, Button, Checkbox, Flex, Heading, Input, InputGroup, InputRightElement, Spacer, Text } from '@chakra-ui/react'
import { FaWhatsappSquare } from 'react-icons/fa';

import React from 'react'

const SignUp = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const handleForm = (e)=>{
        e.prevantDefault();

    }

  return (
    <Box   m={'20px 20px'}>
        <form onSubmit={handleForm}>
        
        <Text fontSize="2xl" fontWeight="semibold" color="black" pb="6px" mt="20px">Sign up</Text>

        <Text color={'#8d9bad '} ml={'30px'} mb={'30px'}>Please enter your details.</Text>
        <Input mb={'30px'} placeholder='Your First Name' />
        <Input mb={'30px'} placeholder='Your Last Name' />
        <Input mb={'30px'} placeholder='Your Email Id' />

        <InputGroup size='md'>
        <Input mb={'30px'}
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
        />
        <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
        </InputRightElement>
        </InputGroup>

        <InputGroup size='md'>
        <Input
            mb={'30px'}
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
        />
        <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
        </InputRightElement>
        </InputGroup>
        <Text mb={'30px'} fontSize="13px" color="##e3c6b0">Use 8 or more characters with a mix of letters & numbers</Text>

        <Flex mb={'1rem'} justifyContent={'center'} alignItems={'center'}>
            <Box p={'10px'} fontSize={'32px'} color={'#48df62'}>< FaWhatsappSquare/></Box>
            <Box> <Text fontSize={'sm'} as={'b'}>Enable order updates and important information on <br /> Whatsapp</Text> </Box>
            <Spacer />
            <Box  ><Checkbox defaultChecked></Checkbox></Box>
           
        </Flex>
        <hr />



        <Text mb={'10px'} fontSize="10xl" fontWeight="semibold" color="black" pb="6px" mt="20px">Verify</Text>
        <Text as={'span'} mb={'10px'} fontSize="14px" color="##e3c6b0">We have sent 6 digit OTP on <Text as={'b'}>+91-8650224225</Text> </Text>
        <Button fontSize={'13px'}  color='#e23911' boder='0' bg='white'>Change</Button>
        
        <Input mb={'10px'} placeholder='Enter your OTP' />
        <Button fontSize={'13px'}  color='#e23911' boder='0' bg='white'>Resend OTP</Button>
        <Button w={'100%'} mb={'10px'} mt='30px' colorScheme='blue'>Verify</Button>

        </form>
        

    </Box>
  )
}

export default SignUp