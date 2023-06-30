import AuthLayout from "@/components/AuthLayout"
import InputComponent from "@/components/InputComponent"
import { Button, Box, Flex, Link, Text, Select, useToast } from "@chakra-ui/react"
import { motion } from "framer-motion" 
import Image from "next/image"
import Router from "next/router"
import React from "react"  
import { useFormik } from "formik";
import * as yup from "yup";  
import Axios from "axios";
import { BASEURL } from "../../../globals/URL"; 
import { IReturnObject } from "@/globals/ReturnObject"
import { Signup } from "@/actions/updateUsername"
import { Display } from "@/actions/DisplayPicAction"


export default function SetupAccount() {
    
    let type:any = null
    const [accountType, setAccountType] = React.useState(1); 
    const [businessTypes, setBusinessTypes] = React.useState([]);
    const [businessType, setBusinessType] = React.useState(type);
    const [image, setImage] = React.useState(null);
    const [selectedImage, setselectedImage] = React.useState("")
    const [submitting, setSubmitting] = React.useState(false);  
    const toast = useToast() 

    const validationSchema = yup.object({
        username: yup
        .string()
        .required("This field is required")
        .min(3, "A minimium of 3 characters"),
    });

    const HandleBusinesType =(e: any)=> {
        setBusinessType(e.target.value)
    }

    const formik = useFormik({
        initialValues: { 
        username: "",  
        },
        validationSchema: validationSchema,
        onSubmit: () => undefined,
    });

    const HandleisBusiness = async (e: any)=> { 
        setAccountType(parseInt(e.target.value));  
    } 

    React.useMemo(() => {
        (async function () {
        const request = await Axios.get(
            `${BASEURL.URL}/user/businesstypes`
        );
        const data: any = request.data.data; 
        setBusinessTypes(data);
        })();
    }, []); 

    // methods
    const handleFilePicker = (e: any) => {
        const file = e["target"].files[0];
        setselectedImage(file)
        const reader = new FileReader(); 
        reader.readAsDataURL(file);
        reader.onload = () => {
        setImage(reader.result as any);
        };
    };

    const uploadImage = () => {
        const formData = new FormData(); 
        formData.append("file", selectedImage);
        formData.append("folder", "vently-Profile");
        formData.append("upload_preset", "svt578zq");

        Axios.post(
            "https://api.cloudinary.com/v1_1/dm0jlrcft/upload",
            formData
        ).then(async (response)=> {  

            const profile = { 
                displaypic: response.data.secure_url
            }  
            const request: IReturnObject = await Display(profile) as IReturnObject;
            if (request.statusCode === 200) {
                console.log("sucessfull")
                setSubmitting(false); 
            }else if (request.statusCode === 400) {
                setSubmitting(false);
                alert(request.errorMessage);
            }else {
                setSubmitting(false);
                alert(request.errorMessage);
            }
        })
    }

    const handleSubmit = async () => {
        try {
            
            if (!formik.touched) {
                toast({
                    title: "Please fill in the form", 
                    status: "error",  
                    duration: 3000, 
                    position: "top"
                })   
            } else if (!formik.isValid) {
                toast({
                    title: "Please fill the form correctly", 
                    status: "error",  
                    duration: 3000, 
                    position: "top"
                })   
            }else if (!formik.dirty) {
                toast({
                    title: "Please fill the form correctly", 
                    status: "error",  
                    duration: 3000, 
                    position: "top"
                })  
            }else if (selectedImage === "") {
                toast({
                    title: "Please provide an Image", 
                    status: "error",  
                    duration: 3000, 
                    position: "top"
                })  
            }else if (businessType === "Categories") {
                toast({
                    title: "Please Select a Business Type", 
                    status: "error",  
                    duration: 3000, 
                    position: "top"
                })  
            }else {
            setSubmitting(true);
            uploadImage();  
            const Obj = {
                username: formik.values.username, 
                isBusiness: accountType === 2 ? true : false,
                BusinessType: businessType 
            }
            const request: IReturnObject = (await Signup(
                Obj
            )) as IReturnObject;   
            if (request.statusCode === 200) {
                setSubmitting(false);
                Router.push("/auth/interest")
            }else if (request.statusCode === 400) {
                setSubmitting(false);
                toast({
                    title: request.errorMessage, 
                    status: "error",  
                    duration: 3000, 
                    position: "top"
                })  
            }else {
                setSubmitting(false);
                toast({
                    title: request.errorMessage, 
                    status: "error",  
                    duration: 3000, 
                    position: "top"
                })  
            }
            
            } 
        } catch (error) {
            setSubmitting(false);
            toast({
                title: error+"", 
                status: "error",  
                duration: 3000, 
                position: "top"
            })   
        }
    }

    return (
        <AuthLayout image="/images/5.png" > 
            <input
                onChange={(e)=> {
                handleFilePicker(e);
                }}
                type="file"
                accept="image/png, image/jpeg"
                hidden
                id="imagePicker"
            />
            <Box width="400px"  > 
                <Text color="brand.black" fontWeight="600" fontFamily="header" fontSize="3xl" >Welcome, Mike</Text>
                <Text color="brand.black" fontSize="16px" marginTop="10px"  fontWeight="400" fontFamily="body" lineHeight="35px" >We"d need you to complete your profile in order to finish your account setup</Text> 
                <Flex justifyContent="center" flexDirection="column" gap="20px" alignItems="center" marginTop="40px" >
                    <Button onClick={() =>
                        document.getElementById("imagePicker")?.click()
                      } as={motion.button} whileHover={{ backgroundColor: "#ff6884", scale: 1.09}} bgColor="#f4f4f4" width="100px" height="100px" borderRadius="9999px" > 
                        {!image && (
                            <Image
                                src="/images/camera.png"
                                width={30}
                                height={30}
                                alt=""
                            />
                        )}
                        {image && (
                            <Image
                                src={image}
                                width={100}
                                height={100}
                                alt=""
                            />
                        )}
                    </Button>
                    <InputComponent 
                      name="username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onFocus={() =>
                        formik.setFieldTouched("username", true, true)
                      }
                      type="text" placeholder="@username" error={formik.errors.username} touch={formik.touched.username}  />
                    <Select onChange={(e)=> HandleBusinesType(e)} fontSize="md" placeholder="Select Account Type" fontWeight="360" bgColor="#f4f4f4" borderColor="#f4f4f4" _hover={{ borderColor: "#f4f4f4"}} focusBorderColor="#f4f4f4" height="60px">
                        <option value={1}>Personal Account</option>
                        <option value={2}>Business Account</option>
                    </Select>
                </Flex>
                <Box width="full" display="flex" flexDirection="column"  marginTop="30px" >  
                    <Text color="brand.black" fontSize="16px" marginTop="10px"  fontWeight="400" fontFamily="body" lineHeight="35px">This account type works best if you want to use Vently for managing events you attend and create.</Text>
                    <Button disabled={submitting} onClick={()=> handleSubmit()} as={motion.button} whileHover={{ scale: 1.05 }}  _hover={{ bg: "brand.primaryColor" }} fontFamily="body" marginTop="16px" fontSize="16px" fontWeight="700" width="full" color="white" bgColor="brand.primaryColor" height="60px" >
                        {submitting ? 
                            "Loading..." :
                            "continue"
                        }
                    </Button>
                </Box>  
            </Box>
        </AuthLayout>
    )
}
