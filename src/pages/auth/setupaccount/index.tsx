import AuthLayout from '@/components/AuthLayout'
import { Button, Box, Flex, Link, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion' 
import Router from 'next/router'
import React from 'react'

export default function index() {
    return (
        <AuthLayout image="/images/5.png" >
            <Box width="400px" > 
                <Text color="brand.black" fontWeight="600" fontFamily="header" fontSize="3xl" >Welcome, Mike</Text>
                <Text color="brand.black" fontSize="16px" marginTop="10px"  fontWeight="400" fontFamily="body" lineHeight="35px" >We'd need you to complete your profile in order to finish your account setup</Text> 
                <Box width="full" display="flex" flexDirection="column"  marginTop="30px" >  
                    <Text color="brand.black" fontSize="16px" marginTop="10px"  fontWeight="400" fontFamily="body" lineHeight="35px">This account type works best if you want to use Vently for managing events you attend and create.</Text>
                    <Button onClick={()=> Router.push("/auth/interest")} as={motion.button} whileHover={{ scale: 1.05 }}  _hover={{ bg: "brand.primaryColor" }} fontFamily="body" marginTop="16px" fontSize="14px" fontWeight="700" width="full" color="white" bgColor="brand.primaryColor" height="50px" >Continue</Button>
                </Box>  
            </Box>
        </AuthLayout>
    )
}
