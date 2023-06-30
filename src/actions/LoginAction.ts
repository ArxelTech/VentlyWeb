import * as axios from 'axios'
import { BASEURL } from '../globals/URL'  
import { IReturnObject } from '@/globals/ReturnObject';

type userPayload = {
    email: string;
    password: string;
}

export const Login = async(payload: userPayload): Promise<IReturnObject | undefined> => { 
    const ReturnObj: IReturnObject = {
        error: false,
        data: null,
        errorMessage: '',
        errorData: null,
        successMessage: '',
        statusCode: 200,
    }
    try {
        const request = await axios.default.post(`${BASEURL.URL}/auth/login`, {
            email: payload.email,
            password: payload.password,
            passwordless: false
            }, {
                headers: { 'content-type': 'application/json'}
            });  

            const token = request.data.data.token;
            localStorage.setItem('token', token);
            localStorage.setItem('details', JSON.stringify(request.data.data.user))
            localStorage.setItem('id', request.data.data.user.id); 
            
            return request.data as IReturnObject;
    } catch (error) {
        ReturnObj.error = true;
        ReturnObj.errorMessage = 'Incorrect Email or Password';
        ReturnObj.errorData = error;
        ReturnObj.statusCode = 400;
        return ReturnObj;
    }
    
}