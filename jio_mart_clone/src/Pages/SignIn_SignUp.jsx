import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import LoginForm from "../Components/LoginForm";
import RegisterForm from "../Components/RegisterForm";

export default function SignIn_SignUp() {
  const { page } = useParams();

  return (
    <Box bg="#F6F6F7" pt={10} pb={5}>
      <Flex width="75%" m='auto' borderRadius='10px' bg='white'>
        <Box width="50%">
          <Image src="https://www.jiomart.com/msassets/images/login-banner.jpg" />
        </Box>
        <Box width="50%">
          {page === "login" ? (
            <LoginForm />
          ) : page === "register" ? (
            <RegisterForm />
          ) : (
            <Text>Page Not Found</Text>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
