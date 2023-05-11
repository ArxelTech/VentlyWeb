import AuthLayout from '@/components/AuthLayout'
import InputComponent from '@/components/InputComponent'
import { Button, Box, Flex, Link, Text, Select } from '@chakra-ui/react'
import { motion } from 'framer-motion' 
import Image from 'next/image'
import Router from 'next/router'
import React from 'react'

export default function index() {
    return (
        <AuthLayout image="/images/5.png" >
            <Box width="400px"  > 
                <Text color="brand.black" fontWeight="600" fontFamily="header" fontSize="3xl" >Welcome, Mike</Text>
                <Text color="brand.black" fontSize="16px" marginTop="10px"  fontWeight="400" fontFamily="body" lineHeight="35px" >We'd need you to complete your profile in order to finish your account setup</Text> 
                <Flex justifyContent="center" flexDirection="column" gap="20px" alignItems="center" marginTop="40px" >
                    <Button as={motion.button} whileHover={{ backgroundColor: "#ff6884", scale: 1.09}} bgColor="#f4f4f4" width="100px" height="100px" borderRadius="9999px" > 
                        <Image
                            src="/images/camera.png"
                            width={30}
                            height={30}
                            alt=""
                        />
                    </Button>
                    <InputComponent type="text" placeholder="@username" />
                    <Select fontSize="md" placeholder='Select Account Type' fontWeight="360" bgColor="#f4f4f4" borderColor="#f4f4f4" _hover={{ borderColor: "#f4f4f4"}} focusBorderColor="#f4f4f4" height="60px">
                        <option>Personal Account</option>
                    </Select>
                </Flex>
                <Box width="full" display="flex" flexDirection="column"  marginTop="30px" >  
                    <Text color="brand.black" fontSize="16px" marginTop="10px"  fontWeight="400" fontFamily="body" lineHeight="35px">This account type works best if you want to use Vently for managing events you attend and create.</Text>
                    <Button onClick={()=> Router.push("/auth/interest")} as={motion.button} whileHover={{ scale: 1.05 }}  _hover={{ bg: "brand.primaryColor" }} fontFamily="body" marginTop="16px" fontSize="16px" fontWeight="700" width="full" color="white" bgColor="brand.primaryColor" height="60px" >Continue</Button>
                </Box>  
            </Box>
        </AuthLayout>
    )
}
