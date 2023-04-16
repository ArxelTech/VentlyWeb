import AuthLayout from '@/components/AuthLayout'
import { Box, Button, Flex, Link, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Router from 'next/router'
import React from 'react'

export default function Interest() {
    return (
        <AuthLayout> 
            <Box width="400px" > 
                <Text color="brand.black" fontWeight="600" fontFamily="header" fontSize="3xl" >Select Your Interests</Text>
                <Text color="brand.black" fontSize="16px" marginTop="10px"  fontWeight="400" fontFamily="body" lineHeight="35px" >Please select at least 3 interest categories, we'll use this to set up your event feed</Text> 
                <Box width="full" display="flex" flexDirection="column"  marginTop="30px" >  
                    <Button onClick={()=> Router.push("/auth/setupaccount")} as={motion.button} whileHover={{ scale: 1.05 }}  _hover={{ bg: "brand.primaryColor" }} fontFamily="body" marginTop="16px" fontSize="14px" fontWeight="700" width="full" color="white" bgColor="brand.primaryColor" height="50px" >Save & Continue</Button>
                </Box>  
            </Box>
        </AuthLayout>
    )
}
