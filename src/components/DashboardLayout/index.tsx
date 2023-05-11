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
        <Box height="100vh" overflow="hidden" width="full"> 
            <Navbar />
            <Flex  alignItems="center" >
                <Box width="fit-content" overflowY="auto" >
                    <LeftSideBar />
                </Box>
                <Box width="fit-content" overflowY="auto" >
                    <RightSideBar />
                </Box>
            </Flex>
        </Box>
    )
}
