import { Box, Text, Flex } from '@chakra-ui/react'
import React from 'react'

export default function EventInfo() {
    return (
        <Box p="28px" bg="white" rounded="12px" w="full" h="fit-content" >
            <Flex  alignItems="center" w="full" justifyContent="space-between">
                <Flex alignItems="center" gap="8px" > 
                    <Box w="52px" h="52px" rounded="full" bg="#ff0000" >

                    </Box> 
                    <Box> 
                        <Text color="brand.black" fontSize="14px" fontWeight="500"  >Sandra Anderson</Text>
                        <Text color="brand.black" fontSize="13px" fontWeight="300"  >@sandraanderson</Text>
                    </Box>
                </Flex>
            </Flex>
            <Box w="full" h="300px" rounded="12px" my="25px" bg="#00ff00" >

            </Box>
        </Box>
    )
}
