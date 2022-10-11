import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const BannerLink = {
  "Groceries" : "https://www.jiomart.com/images/category/2/groceries-20210201.jpeg",
  "Home & Kitchen" : "https://www.jiomart.com/images/category/1687/home-kitchen-20220519.jpeg",
  "Fashion" : "https://www.jiomart.com/images/category/3/fashion-20200902.jpeg",
  "Electronics" : "https://i.pinimg.com/originals/2b/17/31/2b17312951cd68af2d37266a04974073.jpg"
}

export default function ProductBanner() {
  const banner = BannerLink["Electronics"]

  return (
    <Box bg={'teal.100'} width='98%' height={200} borderRadius={10}>
      <Image src={banner} boxSize='100%' alt='Electronics' objectFit='cover' borderRadius={10} />
    </Box>
  )
}
