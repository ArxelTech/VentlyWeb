import { CheckIcon } from '@chakra-ui/icons'
import { InputGroup, InputLeftElement, Input, InputRightElement, Box } from '@chakra-ui/react'
import React from 'react'
import Icon from '../Icon';
import Image from 'next/image';

interface Props {
    left?: boolean,
    leftIcon?: any,
    right?: boolean,
    rightIcon?: any,
    type: string,
    h?: string,
    [x: string]: any;
}

export default function InputComponent({left, leftIcon, right, rightIcon, type, h, ...rest}: Props) {

    const [showPassword, setShowPassword] = React.useState(false)
    const [intialType, setIntialType] = React.useState(type)

    const ViewPassword =()=> {
        if(intialType === "text"){
            setIntialType("password")
        } else {
            setIntialType("text")
        }
    }

    return ( 
        <InputGroup >
            {left && ( 
                <InputLeftElement 
                    children={
                        <Box display="flex" height={h ? h : "60px"} justifyContent="center" alignItems="center" marginTop="18px"  marginLeft="12px" >
                            {leftIcon}
                        </Box>
                    } 
                />
            )}
            <Input {...rest} type={intialType} paddingLeft={left ? "45px": ""} fontSize="md" fontWeight="350" bgColor="#f4f4f4" borderColor="#f4f4f4" _hover={{ borderColor: "#f4f4f4"}} focusBorderColor="#f4f4f4" height={h ? h : "60px"} />
            {right && ( 
                <InputRightElement 
                    children={
                        <Box display="flex" height="50px" justifyContent="center" alignItems="center" marginTop="9px"  marginRight="8px" >
                            {rightIcon ? rightIcon : 
                                <button onClick={()=> ViewPassword()} >
                                    {intialType !== "text" ?   
                                        // <Icon icon="eyeopen" /> 
                                        <Image alt='open' src="/images/open.svg" width={25} height={25} />
                                    : 
                                        <Image alt='close' src="/images/close.svg" width={25} height={25} />
                                    }
                                </button>
                            } 
                        </Box>
                    } />
            )}
        </InputGroup>
    )
}
