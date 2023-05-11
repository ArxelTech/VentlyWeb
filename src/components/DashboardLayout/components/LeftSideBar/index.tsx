import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

export default function LeftSideBar() {
    return (
        <Box width="280px" paddingLeft="12px" paddingRight="20px" paddingTop="23px" >
            <Flex  borderWidth="1px" borderColor="#F5F5F5" bgColor="#FAFAFB" alignItems="center" padding="10px" >
                <Box width="58px" height="54px" bg="#00ff00" rounded="12px" >

                </Box>
            </Flex>
        </Box>
    )
}
