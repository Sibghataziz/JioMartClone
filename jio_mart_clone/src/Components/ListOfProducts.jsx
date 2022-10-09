import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import useAPICall from '../CustomHooks/useAPICall'

export default function ListOfProducts() {
  const [products, setProducts] = useState([])
  const {baseUrl, getData} = useAPICall()

  const getProducts = async ()=>{
    
  }
  
  useEffect(()=>{},[])

  return (
    <Box>
      AllProducts
    </Box>
  )
}
