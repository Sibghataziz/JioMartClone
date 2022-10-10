import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Product({id}) {
  return (
    <Box>
      <Heading>{id}</Heading>
    </Box>
  )
}
