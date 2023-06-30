import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import Navbar from './components/Navbar';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
 
interface Props {
    children: React.ReactNode;
    image?: any
}

export default function DashboardLayout({children, image}: Props) { 
    return (
        <Box height="100vh" overflow="hidden" bg="#f7f8f9" width="full"> 
            <Navbar />
            <Flex width="full" h="full" >
                <Box width="fit-content" bgColor="white" height="full" overflowY="auto" >
                    <LeftSideBar />
                </Box>
                <Box display="flex" px="18px" pt="25px" flex="1" > 
                    {children}
                </Box>
                <Box width="fit-content" pt="25px" display="flex" flexDirection="column" height="full" pr="20px" overflowY="auto" >
                    <RightSideBar />
                </Box>
            </Flex>
        </Box>
    )
}
