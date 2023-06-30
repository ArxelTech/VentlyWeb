import * as axios from 'axios'  
import { IReturnObject } from '../globals/ReturnObject'  
import { BASEURL } from '../globals/URL'

type userPayload = {
    email: string;
    password: string;
    fullName: string; 
}

export const Signup = async(payload: userPayload): Promise<IReturnObject | undefined> => { 
    const ReturnObj: IReturnObject = {
        error: false,
        data: null,
        errorMessage: '',
        errorData: null,
        successMessage: '',
        statusCode: 200
    }  

    try {
        
        const request = await axios.default.post(`${BASEURL.URL}/auth/signup`, {
            fullName: payload.fullName, 
            email: payload.email,
            password: payload.password,
            passwordless: false
            }, {
                headers: { 'content-type': 'application/json'}
            });  
            localStorage.setItem('id', request.data.data.user.id);  
            localStorage.setItem('details', JSON.stringify(request.data.data.user))
            localStorage.setItem('email', payload.email);   
            return request.data as IReturnObject;
    } catch (error) {
        ReturnObj.error = true;
        ReturnObj.errorMessage = 'An error occured while trying to Create your account';
        ReturnObj.errorData = error;
        ReturnObj.statusCode = 400;
        return ReturnObj;
    }
}