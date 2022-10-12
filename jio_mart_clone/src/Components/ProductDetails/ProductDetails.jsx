import React from 'react';
import {Box, Spacer, Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Grid, GridItem,Image, Heading,Text, Button, Input } from "@chakra-ui/react"
import {ChevronRightIcon, AddIcon} from "@chakra-ui/icons"
import Description from './Description';
import { useEffect } from 'react';
import { useState } from 'react';

const products = {
    "item_name": "Saffola Gold Refined Rice Bran And Sunflower Based Blended Oil 3 L + Daawat Devaaya Basmati Rice 5 kg (Combo Pack)",
    "item_img_url": "https://www.jiomart.com/images/product/600x600/592200116/saffola-gold-refined-rice-bran-and-sunflower-based-blended-oil-3-l-daawat-devaaya-basmati-rice-5-kg-combo-pack-0-20220624.jpg",
    "item_other_img_url": [
        "https://www.jiomart.com/images/product/150x150/592200116/saffola-gold-refined-rice-bran-and-sunflower-based-blended-oil-3-l-daawat-devaaya-basmati-rice-5-kg-combo-pack-0-20220624.jpg",
        "https://www.jiomart.com/images/product/150x150/592200116/saffola-gold-refined-rice-bran-and-sunflower-based-blended-oil-3-l-daawat-devaaya-basmati-rice-5-kg-combo-pack-1-20220624.jpg",
        "https://www.jiomart.com/images/product/150x150/592200116/saffola-gold-refined-rice-bran-and-sunflower-based-blended-oil-3-l-daawat-devaaya-basmati-rice-5-kg-combo-pack-13-20220624.jpg",
        "https://www.jiomart.com/images/product/150x150/592200116/saffola-gold-refined-rice-bran-and-sunflower-based-blended-oil-3-l-daawat-devaaya-basmati-rice-5-kg-combo-pack-14-20220624.jpg"
    ],
    "item_final_price": 915.0,
    "item_price": 1310.0,
    "item_discount": 30,
    "item_tag_name": "Trending",
    "item_disc_price": 395.0,
    "item_stock": true,
    "item_like": false,
    "item_star": 0,
    "item_quantity": 0,
    "text_veg": true,
    "id": 1,
    "item_category": "Top_Deals",
    "item_addtocart": false
}



export default function ProductDetails() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState({})
    useEffect(()=>{
        setLoading(true)
        fetch("http://localhost:3004/products/1")
        .then(res => res.json())
        .then((res => {
            console.log("res",res)
            setData(res)
            
        }))
        .catch((error)=>{
            console.log(error)
            setError(true)
        })
        .finally(()=> {setLoading(false)
        setError(false)})
    },[])
    console.log("Data", data)

    if(loading){
        return (
            <>454
            '
            4
            s</>
        )
    }

  return (
    <Box>
       
        <Breadcrumb m='auto' pl='10px' w='90%' fontSize='14px' spacing='3px' separator={<ChevronRightIcon color='gray.500' />}>
        <BreadcrumbItem>
            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
            <BreadcrumbLink href='#'>All Categories</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Product Page</BreadcrumbLink>
        </BreadcrumbItem>
        </Breadcrumb>

        <Flex  h='500px' m='auto' mt='20px' w='90%' >

        <Box w='50%'  p='1'>
        
            <Flex  m='auto' mt='20px' w='90%'>
            
            <Box w='25%'  p='1' >
                <Box borderRadius='5px'> 
                 <Image  boxShadow='dark-lg'  rounded='md' bg='white'
                        borderRadius="10px"m='5px' w='70%' src={products.item_other_img_url[0]} /></Box>
                <Box borderRadius='5px'> 
                 <Image  boxShadow='dark-lg'  rounded='md' bg='white'
                        borderRadius="10px"m='5px' w='70%' src={products.item_other_img_url[1]} /></Box>
                <Box borderRadius='5px'> 
                 <Image  boxShadow='dark-lg'  rounded='md' bg='white'
                        borderRadius="10px"m='5px' w='70%' src={products.item_other_img_url[2]} /></Box>
                <Box borderRadius='5px'> 
                 <Image  boxShadow='dark-lg'  rounded='md' bg='white'
                        borderRadius="10px"m='5px' w='70%' src={products.item_other_img_url[3]} /></Box>
                 
            </Box>
            
            <Box w='75%'  >
                <Box> <Image  boxShadow='lg' src={products.item_img_url} />  </Box>
            </Box>
            </Flex>
    
        </Box>
        
        <Box w='50%' p='4' >
           <Heading as={'h3'} size='md' mb={'15px'}>{products.item_name}</Heading>
           <Text as='samp' color='gray.500' >Price</Text>
           <Heading  as={'h3'} size='md'>₹ {products.item_final_price}  <Text ml={'20px'} as='samp' color='gray.700'>MRP: </Text> <Text as='del'>{products.item_price}</Text>  </Heading>
            <Text mb={'15px'} fontSize={'15px'} as={'samp'}>You Save: <Text as={'b'} color='green'>₹{products.item_disc_price}</Text> Inclusive of all taxes</Text>
            <Spacer/>
            <Text as={'b'} color='green'>{products.item_stock ? "In Stock" : "Out of Stock"}</Text>
            <Spacer/>
            <Text as={'samp'}>Sold by <Text as={'b'} color='blue'> Reliance Retail</Text></Text>
            <Spacer/>
            <Text color={'gray.700'} as={'samp'}>Inaugural Offer<Text color={'black'} as={'b'} > Free Shipping</Text></Text>
            <Spacer/>
            <Image w='120px' src='https://e7.pngegg.com/pngimages/739/826/png-clipart-logo-credit-card-payment-card-american-express-credit-card-text-display-advertising.png' />
            <Button mt='20px' mb='15px' h='35px' colorScheme='blue'>Add to Cart +</Button>
            <Spacer />
            <Text mt={'20px'} color={'black'} as={'b'} >Delivery</Text>
             <Spacer />
            <Input border='0' borderBottom='2px solid gray' mt={'10px'} addon='Pin' h='30px' w='150px' placeholder='Basic usage' value='249407' />
            <Text as='b' color='red' fontSize='15px'>CHECK</Text>
            <Text fontSize='12px'>Check for estimated delivery date</Text>
        </Box>
        </Flex>

        <hr style={{ "color": "black",  "width": "90%","margin":"auto","marginTop" : "30px", "marginBottom": "30px"}} />

        

        <Description />
    </Box>
  )
}

