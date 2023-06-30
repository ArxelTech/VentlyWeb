import * as axios from 'axios'  
import { IReturnObject } from '../globals/ReturnObject' 
import { BASEURL } from '../globals/URL'

type userPayload = { 
    displaypic: string,
} 

export const Display = async( payload: userPayload): Promise<IReturnObject> => {
    const ReturnObj: IReturnObject = {
        error: false,
        data: null,
        errorMessage: '',
        errorData: null,
        successMessage: '',
        statusCode: 200
    }
    try {
        // make request to vently server
        const request = await axios.default.put(`${BASEURL.URL}/user/${localStorage.getItem('id')+""}`, payload, {
                headers: { 'content-type': 'application/json'}
            })  
            localStorage.setItem('displaypic', payload.displaypic); 
            return request.data as IReturnObject;
    } catch (error) {
        ReturnObj.error = true;
        ReturnObj.errorMessage = 'An error occured while trying to Create your account';
        ReturnObj.errorData = error;
        ReturnObj.statusCode = 400;
        return ReturnObj;
    }
}