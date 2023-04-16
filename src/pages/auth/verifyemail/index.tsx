import AuthLayout from '@/components/AuthLayout'
import { Button, Flex, Box, Link, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion' 
import Router from 'next/router'
import React from 'react'

export default function VerifyEmail() {
    return (
        <AuthLayout image="/images/3.png" > 
            <Box width="400px" > 
                <Text color="brand.black" fontWeight="600" fontFamily="header" fontSize="3xl" >Verify Your Email Address</Text>
                <Text color="brand.black" fontSize="16px" marginTop="10px"  fontWeight="400" fontFamily="body" lineHeight="35px" >We just sent a code to your email address. Please enter it below to verify your identity</Text> 
                <Box width="full" display="flex" flexDirection="column"  marginTop="30px" >  
                    <Button onClick={()=> Router.push("/auth/setupaccount")} as={motion.button} whileHover={{ scale: 1.05 }}  _hover={{ bg: "brand.primaryColor" }} fontFamily="body" marginTop="16px" fontSize="14px" fontWeight="700" width="full" color="white" bgColor="brand.primaryColor" height="50px" >Continue</Button>
                </Box> 
                <Box marginTop="32px" display="flex" >
                    <Link href='#'  marginX="auto" fontSize="14px" color="brand.primaryColor" >Resend Code</Link>
                </Box>
                <Flex color="brand.black" width="full" marginTop="32px" fontSize="14px" gap="1" fontWeight="400" justify="center" fontFamily="body" >
                    <Text>Having Issues?</Text>
                    <Link href='#' color="brand.primaryColor" >Contact Our Support</Link>
                </Flex>
            </Box>
        </AuthLayout>
    )
}
