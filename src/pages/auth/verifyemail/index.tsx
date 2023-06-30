import AuthLayout from '@/components/AuthLayout'
import Icon from '@/components/Icon'
import InputComponent from '@/components/InputComponent'
import { Button, Flex, Box, Link, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion' 
import Router from 'next/router'
import React from 'react'
import {VerifyCode, ResendCode} from '../../../actions/Verifyemail';
import {useFormik} from 'formik';
import * as yup from 'yup'
import { IReturnObject } from "../../../globals/ReturnObject"; 

const validationSchema = yup.object({
    code: yup.string().required('The code is required'),
});

export default function VerifyEmail() {
    const [submitting, setSubmitting] = React.useState(false);
    // const [resending, setResending] = React.useState(false);
  
    const [initialTime, setInitialTime] = React.useState(0);
    const [startTimer, setStartTimer] = React.useState(false);    
  
    const formik = useFormik({
        initialValues: {code: ''},
        onSubmit: () => {},
        validationSchema: validationSchema
    });
  
    const handleSubmit = async (e: any) => {  
        e.preventDefault()
        setSubmitting(true);
        if (!formik.dirty) {
            // appropriate alert
            setSubmitting(false);
            alert('You have to put in the code to continue')
        } else if (!formik.isValid) {
            alert('Please fill in the form correctly');
        } else if (formik.isValid) {
            // make request
            const result: IReturnObject = await VerifyCode(parseInt(formik.values.code));
            if (result.statusCode === 200) {
              setSubmitting(false);
              Router.push("/setusername")
            } else if (result.statusCode === 400) {
              setSubmitting(false);
              alert('This Code Provided is Incorrect');
            }else if (result.statusCode === 500) {
              setSubmitting(false);
              alert(result.errorMessage);
            }
        }
    }
  
    React.useEffect(() => {
      if (initialTime > 0) {
        setTimeout(() => { 
          setInitialTime(initialTime - 1);
        }, 1000);
      }
  
      if (initialTime === 0 && startTimer) { 
        setStartTimer(false);  
      }
    }, [initialTime, startTimer]);
  
    const resendCode = async () => { 
        const result = await ResendCode();
        if (result.statusCode === 200) { 
            setInitialTime(59);
            setStartTimer(true); 
        } else if (result.statusCode === 400) {
          setSubmitting(false);
          alert(result.errorMessage);
        }else if (result.statusCode === 500) {
          setSubmitting(false);
          alert(result.errorMessage);
        }
        setInitialTime(59);
    }

    return (
        <AuthLayout image="/images/3.png" > 
            <Box width="400px" > 
                <form onSubmit={(e)=> handleSubmit(e)} > 
                    <Text color="brand.black" fontWeight="600" fontFamily="header" fontSize="3xl" >Verify Your Email Address</Text>
                    <Text color="brand.black" fontSize="16px" marginTop="10px"  fontWeight="400" fontFamily="body" lineHeight="35px" >We just sent a code to your email address. Please enter it below to verify your identity</Text>  
                    <Box gap="10px" display="flex" flexDirection="column"  marginTop="20px" > 
                        <InputComponent 
                            name="code"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("code", true, true)
                            } left={true} type="number" leftIcon={<Icon icon="shield" />} placeholder="00000" error={formik.errors.code} touch={formik.touched.code}  /> 
                            
                        <Text onClick={resendCode} role='button' as={motion.p} ml="auto"
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }} color="brand.primaryColor" fontWeight="600" fontFamily="header" fontSize="xs">{initialTime !== 0 ? <span>{"0 : "+initialTime}</span> : 'Resend code'}</Text> 
                    </Box>
                    <Box width="full" display="flex" flexDirection="column"  marginTop="10px" >  
                        <Button onClick={()=> Router.push("/auth/setupaccount")} as={motion.button} whileHover={{ scale: 1.05 }}  _hover={{ bg: "brand.primaryColor" }} fontFamily="body" marginTop="16px" fontSize="16px" fontWeight="700" width="full" color="white" bgColor="brand.primaryColor" height="60px" >{submitting ? "Loading...": "Continue"}</Button>
                    </Box> 
                    <Box marginTop="32px" display="flex" >
                        <Link href='#'  marginX="auto" fontSize="14px" color="brand.primaryColor" >Resend Code</Link>
                    </Box>
                    <Flex color="brand.black" width="full" marginTop="32px" fontSize="14px" gap="1" fontWeight="400" justify="center" fontFamily="body" >
                        <Text>Having Issues?</Text>
                        <Link href='#' color="brand.primaryColor" >Contact Our Support</Link>
                    </Flex>
                </form>
            </Box>
        </AuthLayout>
    )
}
