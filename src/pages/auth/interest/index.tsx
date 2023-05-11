import AuthLayout from '@/components/AuthLayout'
import { Box, Button, Flex, Grid, Link, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Router from 'next/router'
import React from 'react'

export default function Interest() {
    return (
        <AuthLayout image="/images/6.png"> 
            <Box width="40vw" > 
                <Text color="brand.black" fontWeight="600" fontFamily="header" fontSize="3xl" >Select Your Interests</Text>
                <Text color="brand.black" fontSize="16px" marginTop="10px"  fontWeight="400" fontFamily="body" lineHeight="25px" >Please select at least 3 interest categories, we'll use this to set up your event feed</Text>  
                <Grid width="full" marginTop="30px" marginBottom="20px"  templateColumns='repeat(3, 1fr)' rowGap={3} gap={3}>
                    <Button  _hover={{ bg: "brand.primaryColor", color: "#fff" }} fontFamily="body"  fontSize="15px" fontWeight="400" width="full" color="#3e3f41" bgColor="#e9e9e9" height="45px" >
                        Auto
                    </Button>
                    <Button  _hover={{ bg: "brand.primaryColor", color: "#fff" }} fontFamily="body"  fontSize="15px" fontWeight="400" width="full" color="#3e3f41" bgColor="#e9e9e9" height="45px" >
                        Agiculture
                    </Button>
                    <Button  _hover={{ bg: "brand.primaryColor", color: "#fff" }} fontFamily="body"  fontSize="15px" fontWeight="400" width="full" color="#3e3f41" bgColor="#e9e9e9" height="45px" >
                        Entertainment
                    </Button>
                    <Button  _hover={{ bg: "brand.primaryColor", color: "#fff" }} fontFamily="body"  fontSize="15px" fontWeight="400" width="full" color="#3e3f41" bgColor="#e9e9e9" height="45px" >
                        Autos
                    </Button>
                </Grid>
                <Box width="full" display="flex" flexDirection="column"  marginTop="30px" >  
                    <Button onClick={()=> Router.push("/auth/setupaccount")} as={motion.button} whileHover={{ scale: 1.05 }}  _hover={{ bg: "brand.primaryColor" }} fontFamily="body" marginTop="16px" fontSize="15px" fontWeight="700" width="full" color="white" bgColor="brand.primaryColor" height="60px" >Save & Continue</Button>
                </Box>  
            </Box>
        </AuthLayout>
    )
}
