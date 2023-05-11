import InputComponent from '@/components/InputComponent'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
    return (
        <Flex alignItems="center" h="96px" boxShadow='md' justifyContent="space-between" width="full" paddingX="40px" > 
            <Flex gap="2" alignItems="center" fontFamily="header" marginLeft="auto" fontSize="base">
                <svg  width="26.974" height="21" viewBox="0 0 26.974 21"><defs></defs><g transform="translate(-32.5 -56.8)"><g transform="translate(32.5 56.8)"><path fill='#2a2a2a' d="M54.479,56.806,46.664,77.8H42.027a2.715,2.715,0,0,1-2.47-1.6l-.129-.351L32.5,56.806h7.082l2.833,9.743a48.613,48.613,0,0,1,1.2,5.105h.129c.345-1.712.69-3.307,1.158-5.105l1.2-4.329H43.85l.788-3.11A2.7,2.7,0,0,1,47.311,56.8c.1,0,.191.006.289.012l.006-.012h6.873Z" transform="translate(-32.5 -56.8)"/></g><circle fill='#FF517B' cx="3.024" cy="3.024" r="3.024" transform="translate(53.426 71.66)"/></g></svg>
                Vently
            </Flex>
            <InputComponent type='text' marginX="auto" h="45px" fontSize="16px" width="35vw" />
            <Box width="fit-content" > 
                <Box rounded="full" bg="#ff0000" width="40px" height="40px" ></Box>
            </Box>
        </Flex>
    )
}
