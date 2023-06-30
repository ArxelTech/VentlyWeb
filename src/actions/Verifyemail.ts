import * as axios from 'axios'

import { IReturnObject } from '../globals/ReturnObject'
import { BASEURL } from '../globals/URL' 

export const VerifyCode = async(code: number): Promise<IReturnObject> => {
    const ReturnObj: IReturnObject = {
        error: false,
        data: null,
        errorMessage: '',
        errorData: null,
        successMessage: '',
        statusCode: 200
    }

    let userId: any = localStorage.getItem('id')+"";
    try {
        // make request to vently server
        const request = await axios.default.post(`${BASEURL.URL}/auth/verifycode/${userId}/${code}`, {},
         {
            headers: { 'content-type': 'application/json'}
         }) 
        return request.data as IReturnObject;
    } catch (error) {
        ReturnObj.error = true;
        ReturnObj.errorMessage = 'An error occured while trying to Create your account';
        ReturnObj.errorData = error;
        ReturnObj.statusCode = 400;
        return ReturnObj;
    }
}

export const ResendCode = async(): Promise<IReturnObject>  => {
    const ReturnObj: IReturnObject = {
        error: false,
        data: null,
        errorMessage: '',
        errorData: null,
        successMessage: '',
        statusCode: 200
    }
    let email: any = localStorage.getItem('email')+""; 
    try {
        // make request to vently server
        const request = await axios.default.get(`${BASEURL.URL}/auth/resendemail/${email}`,
         {
            headers: { 'content-type': 'application/json'}
         })
        return request.data as IReturnObject;
    } catch (error) {
        ReturnObj.error = true;
        ReturnObj.errorMessage = 'An error occured while trying to Create your account';
        ReturnObj.errorData = error;
        ReturnObj.statusCode = 400;
        return ReturnObj;
    }
}