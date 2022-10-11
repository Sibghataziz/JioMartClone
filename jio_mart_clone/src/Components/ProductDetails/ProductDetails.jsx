import React from 'react';
import {Box, Spacer, Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Grid, GridItem } from "@chakra-ui/react"
import {ChevronRightIcon} from "@chakra-ui/icons"
import Description from './Description';


export default function ProductDetails() {
  return (
    <Box>
       
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
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

        <Flex width='40%'>
        <Box width='100%' p='4' bg=''>
            Box 1

            <Grid
            h='500px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(3, 1fr)'
            gap={4}
            >
            <GridItem rowSpan={2} colSpan={1} bg='tomato'
            />
            <GridItem rowSpan={2}  colSpan={2} bg='papayawhip' />
            
            
            </Grid>


        </Box>
        
        <Box p='4' bg='green.400'>
            Box 2
        </Box>
        </Flex>

        

        <Description />
    </Box>
  )
}
