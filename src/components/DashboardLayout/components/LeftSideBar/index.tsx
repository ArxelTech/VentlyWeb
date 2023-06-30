import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function LeftSideBar() {

    const [pathName, setPathName] = React.useState("") 

    React.useEffect(()=> {
        setPathName(window?.location?.pathname)
    }, [])

    const mainbar_array = [
        {
            image: "/images/sidebar/post.svg",
            pathname: "/dashboard",
            name:"Feed"    
        },
        {
            image: "/images/sidebar/calendar.svg",
            pathname: "",
            name:"Events"    
        },
        {
            image: "/images/sidebar/tickets.svg",
            pathname: "",
            name:"Tickets"    
        },
        {
            image: "/images/sidebar/download.svg",
            pathname: "",
            name:"Downloads & Purchases"    
        },
        {
            image: "/images/sidebar/chat.svg",
            pathname: "",
            name:"Messages"    
        },
        {
            image: "/images/sidebar/purse.svg",
            pathname: "",
            name:"Wallet"    
        },
    ]

    const shortcut_array = [
        {
            image: "/images/sidebar/calendar.svg",
            pathname: "",
            name:"Upcoming Events"    
        },
        {
            image: "/images/sidebar/settings.svg",
            pathname: "",
            name:"Settings"    
        },
        {
            image: "/images/sidebar/logout.svg",
            pathname: "",
            name:"Log Out"    
        }
    ]
    
    return (
        <Box width="300px" paddingLeft="12px" fontFamily="subHeader" paddingRight="20px" paddingTop="23px" >
            <Flex  borderWidth="1px" gap="12px" borderColor="#F5F5F5" bgColor="#FAFAFB" alignItems="center" padding="10px" >
                <Box width="58px" height="54px" bg="#00ff00" rounded="12px" >

                </Box>
                <Box> 
                    <Text color="brand.black" fontSize="14px" fontWeight="500"  >Sandra Anderson</Text>
                    <Text color="brand.black" fontSize="13px" fontWeight="300"  >@sandraanderson</Text>
                </Box>
            </Flex>
            <Flex flexDirection="column" marginTop="27px" paddingX="6px" gap="12px"  width="full">
                {mainbar_array.map((item: any, index: number)=> {
                    return( 
                        <Button fontWeight="400" color={pathName === item.pathname ? "brand.primaryColor" : "brand.black" } fontSize="14px"  key={index} width="full" _hover={{ bg: "brand.activecolor" }} display="flex" justifyContent="start" height="52px" paddingX="24px" gap="12px" bg={pathName === item.pathname ? "brand.activecolor": ""} >
                            <Image width={20} height={20} src={item?.image} alt='sidebar' />
                            {item?.name}
                        </Button>
                    )
                })}
                <Text color="brand.black" pl="24px" mt="20px" fontSize="14px" fontWeight="500"  >SHORTCUTS</Text>
                {shortcut_array.map((item: any, index: number)=> {
                    return( 
                        <Button fontWeight="400" color={pathName === item.pathname ? "brand.primaryColor" : "brand.black" } fontSize="14px"  key={index} width="full" _hover={{ bg: "brand.activecolor" }} display="flex" justifyContent="start" height="52px" paddingX="24px" gap="12px" bg={pathName === item.pathname ? "brand.activecolor": ""} >
                            <Image width={20} height={20} src={item?.image} alt='sidebar' />
                            {item?.name}
                        </Button>
                    )
                })}
            </Flex>
        </Box>
    )
}
