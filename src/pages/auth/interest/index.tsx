import AuthLayout from '@/components/AuthLayout'
import { Box, Button, Flex, Grid, Link, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Router from 'next/router'
import React from 'react'
import * as axios from "axios";
import { BASEURL } from "../../../globals/URL"; 
import { IReturnObject } from "../../../globals/ReturnObject";
import {IoMdCheckmark} from "react-icons/io";
import { UpdateInterests } from '@/actions/UpdateInterest'

export default function Interest() {
 
    const [loading, setLoading] = React.useState(true);
    const [interests, setInterest] = React.useState([]);   
    const [selectedInterets, setSelectedInterests] = React.useState(
        [] as Array<string>
    );  

    React.useMemo(() => {
        (async function () {
        const result = await axios.default.get(`${BASEURL.URL}/user/interests`); 
        const interests = result.data.data;
        setInterest(interests);
        setLoading(false);
        })();
    }, []);

    // methods
    const handleSelect = (item: string) => {
        if (selectedInterets.includes(item)) {
            const clone = [...selectedInterets];
            const index = clone.indexOf(item); 
            clone.splice(index, 1); 
            setSelectedInterests(clone); 
        }else{ 
        const clone = [...selectedInterets, item];
        setSelectedInterests(clone); 
        }
    };

    const handleSubmit = async () => {
        if (selectedInterets.length < 3) {
            alert("Please select up to 3 interests");
        }else {
            setLoading(true);
            const obj = {
                interests : selectedInterets,
            }
            const result : IReturnObject  = await UpdateInterests(obj) as IReturnObject;  
            if (result.statusCode === 200) {
                setLoading(false);
                Router.push('/feed'); 
            }else if (result.statusCode === 400) {
                alert(result.errorMessage);
            }else {
                alert(result.errorMessage);
            }
        }
    }

    const InterestList = (source: any) => { 

        return source.map((item: any, index: any) => {
            return(

                <Button key={index} _hover={{ bg: "brand.primaryColor", color: "#fff" }} fontFamily="body"  fontSize="15px" fontWeight="400" width="full" color={!selectedInterets.includes(item) ? "#3e3f41" : "white" } bgColor={!selectedInterets.includes(item) ? "#e9e9e9" : "brand.primaryColor"} height="45px" >
                    {item}
                </Button> 
            // <div
            //     key={index}
            //     onClick={() => handleSelect(item)}
            //     className={ 
            //     !selectedInterets.includes(item)
            //     ? "text-sm p-2 flex flex-row justify-center items-center text-gray-600 font-heebo-regular rounded bg-gray-200 mb-2 cursor-pointer mr-3"
            //     : "text-sm p-2 flex flex-row justify-center items-center text-white font-heebo-regular rounded bg-ventlyRed mb-2 cursor-pointer mr-3"
            //     }> 
            // <p> {item} </p>
            // <div className=
            // {
            //     !selectedInterets.includes(item)
            //     ? "hidden"
            //     : 'w-4 h-4 flex justify-center items-center rounded-full border-2 ml-2 border-white'
            // } 
            // >
            //     <IoMdCheckmark className='text-white w-4'   />
            // </div>
            // </div>
            )
        }) 
    }

    return (
        <AuthLayout image="/images/6.png"> 
            <Box width="40vw" > 
                <Text color="brand.black" fontWeight="600" fontFamily="header" fontSize="3xl" >Select Your Interests</Text>
                <Text color="brand.black" fontSize="16px" marginTop="10px"  fontWeight="400" fontFamily="body" lineHeight="25px" >Please select at least 3 interest categories, we'll use this to set up your event feed</Text>  
                <Grid width="full" marginTop="30px" marginBottom="20px"  templateColumns='repeat(3, 1fr)' rowGap={3} gap={3}>
                    {/* <Button  _hover={{ bg: "brand.primaryColor", color: "#fff" }} fontFamily="body"  fontSize="15px" fontWeight="400" width="full" color="#3e3f41" bgColor="#e9e9e9" height="45px" >
                        Auto
                    </Button>
                    <Button  _hover={{ bg: "brand.primaryColor", color: "#fff" }} fontFamily="body"  fontSize="15px" fontWeight="400" width="full" color="#3e3f41" bgColor="#e9e9e9" height="45px" >
                        Agiculture
                    </Button>
                    <Button  _hover={{ bg: "brand.primaryColor", color: "#fff" }} fontFamily="body"  fontSize="15px" fontWeight="400" width="full" color="#3e3f41" bgColor="#e9e9e9" height="45px" >
                        Entertainment
                    </Button>
                    <Button  _hover={{ bg: "brand.primaryColor", color: "#fff" }} fontFamily="body"  fontSize="15px" fontWeight="400" width="full" color="#3e3f41" bgColor="#e9e9e9" height="45px" >
                        Autos
                    </Button> */}
                    {InterestList(interests)}
                </Grid>
                <Box width="full" display="flex" flexDirection="column"  marginTop="30px" >  
                    <Button onClick={()=> Router.push("/auth/setupaccount")} as={motion.button} whileHover={{ scale: 1.05 }}  _hover={{ bg: "brand.primaryColor" }} fontFamily="body" marginTop="16px" fontSize="15px" fontWeight="700" width="full" color="white" bgColor="brand.primaryColor" height="60px" >
                        
                        {loading ? 
                            "Loading...":
                            'Save & Continue'
                        }
                    </Button>
                </Box>  
            </Box>
        </AuthLayout>
    )
}
