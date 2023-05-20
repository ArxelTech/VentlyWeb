import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function RightSideBar() {
    return (
        <>
            <Box width="350px" rounded="md" bg="white" pt="30px" >
                <Flex  px="25px" pb="25px" width="full" borderBottomWidth="0.5px" borderColor="#f5f5f5" >
                    <Box> 
                        <Text color="brand.black" fontSize="18px" fontFamily="subHeader" fontWeight="500" >Trending Events</Text>
                        <Text color="brand.black" fontSize="14px" fontFamily="subHeader" fontWeight="400" >Lagos, Nigeria</Text>
                    </Box>
                </Flex>
                <Box  px="25px" py="25px" width="full" borderBottomWidth="0.5px" borderColor="#f5f5f5" > 
                    <Text color="brand.black" fontSize="14px" fontFamily="subHeader" fontWeight="500" >New Decade 2020 VIP Pool Party</Text>
                    <Text color="brand.black" fontSize="12px" fontFamily="subHeader" fontWeight="400" >450,890 attending</Text> 
                </Box>
                <Box  px="25px" py="25px" width="full" borderBottomWidth="0.5px" borderColor="#f5f5f5" > 
                    <Text color="brand.black" fontSize="14px" fontFamily="subHeader" fontWeight="500" >The Xperience Lagos 6th Edition</Text>
                    <Text color="brand.black" fontSize="12px" fontFamily="subHeader" fontWeight="400" >450,890 attending</Text> 
                </Box>
                <Box  px="25px" py="25px" width="full" borderBottomWidth="0.5px" borderColor="#f5f5f5" > 
                    <Text color="brand.black" fontSize="14px" fontFamily="subHeader" fontWeight="500" >Felabration 2020</Text>
                    <Text color="brand.black" fontSize="12px" fontFamily="subHeader" fontWeight="400" >450,890 attending</Text> 
                </Box>
                <Box  px="25px" py="15px" width="full" > 
                    <Button height="41px" bg="#F3F3F3" fontSize="14px" color="brand.black" width="full" rounded="5px" fontFamily="subHeader" fontWeight="400" >Show All</Button>
                </Box>
            </Box>
            <Box width="350px" mt="14px" rounded="md" bg="white" pt="30px" >
                <Flex  px="25px" pb="25px" width="full" borderBottomWidth="0.5px" borderColor="#f5f5f5" > 
                    <Text color="brand.black" fontSize="16px" fontFamily="subHeader" fontWeight="500" >Coming Up Soon</Text>
                </Flex>
                <Box  px="25px" py="25px" width="full" > 
                    <Text color="brand.black" fontSize="14px" fontFamily="subHeader" fontWeight="500" >New Decade 2020 VIP Pool Party</Text>
                    <Text color="brand.black" fontSize="12px" fontFamily="subHeader" fontWeight="400" >450,890 attending</Text> 
                </Box>
            </Box>
        </>
    )
}
