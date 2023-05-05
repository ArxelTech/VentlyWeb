import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import AuthLayout from '@/components/AuthLayout'
import { Box, Button, Flex, Text, Link } from '@chakra-ui/react'
import Router from 'next/router' 
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <AuthLayout image="/images/4.png" >
        <Box width="fit-content" >
          <Text color="brand.black" fontWeight="600" fontFamily="header" fontSize="3xl" >Events Should Be Awesome</Text>
          <Text color="brand.black" fontSize="16px" marginTop="10px"  fontWeight="400" fontFamily="body" >Create An Account Or Log In To Continue</Text>
          <Flex marginTop="32px" gap="4" fontWeight="500" fontFamily="body" >
            <Button as={motion.button} whileHover={{ scale: 1.1 }}  onClick={()=> Router.push("/auth/login")} _hover={{ bg: "brand.primaryColor" }} fontFamily="body" fontSize="14px" fontWeight="700" paddingX="60px" color="white" bgColor="brand.primaryColor" height="50px" >LOG IN</Button>
            <Button as={motion.button} whileHover={{ scale: 1.1 }}  onClick={()=> Router.push("/auth/register")} _hover={{ bg: "white" }} fontSize="14px" fontFamily="body" fontWeight="700" paddingX="60px" color="brand.primaryColor" borderWidth="1px" bgColor="white" borderColor="brand.primaryColor" height="50px" >CREATE ACCOUNT</Button>
          </Flex>
        </Box>
      </AuthLayout>
  )
}
