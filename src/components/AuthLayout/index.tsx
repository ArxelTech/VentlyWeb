import { chakra, Container, Flex, Image, shouldForwardProp } from '@chakra-ui/react' 
import { motion, isValidMotionProp } from 'framer-motion';
import React from 'react'

interface Props {
    children: React.ReactNode;
    image?: any
}

const ChakraBox = chakra(motion.div, { 
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function AuthLayout({children, image}: Props) {
    
    return (
        <Flex  alignItems="center" height="100vh" >
            <ChakraBox 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }} 
                // @ts-ignore no problem in operation, although type error appears.
                transition={{ delay: 1.2, type: "tween" }}
                width="full"  height="full" bg="red.400" >
                <Image width="full" height="100vh" objectFit="cover" src={image} />
            </ChakraBox>
            <ChakraBox 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{ delay: 2, type: "tween" }}
                position="relative" width="full" display="flex" height="full" alignItems="center" justifyContent="center" >
                <Flex top="20" right="40" gap="2" fontFamily="header" fontSize="xl" position="absolute">
                    <svg  width="26.974" height="21" viewBox="0 0 26.974 21"><defs></defs><g transform="translate(-32.5 -56.8)"><g transform="translate(32.5 56.8)"><path fill='#2a2a2a' d="M54.479,56.806,46.664,77.8H42.027a2.715,2.715,0,0,1-2.47-1.6l-.129-.351L32.5,56.806h7.082l2.833,9.743a48.613,48.613,0,0,1,1.2,5.105h.129c.345-1.712.69-3.307,1.158-5.105l1.2-4.329H43.85l.788-3.11A2.7,2.7,0,0,1,47.311,56.8c.1,0,.191.006.289.012l.006-.012h6.873Z" transform="translate(-32.5 -56.8)"/></g><circle fill='#ff2b3c' cx="3.024" cy="3.024" r="3.024" transform="translate(53.426 71.66)"/></g></svg>
                    Vently
                </Flex>
                {children}
            </ChakraBox>
        </Flex>
    )
}
