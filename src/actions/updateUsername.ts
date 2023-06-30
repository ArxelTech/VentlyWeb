import * as axios from 'axios'
// import firebase from 'firebase'
import { IReturnObject } from '../globals/ReturnObject'
// import { Firebase } from 'globals/Firebase'
import { BASEURL } from '../globals/URL'

type userPayload = {
    username: string;
    isBusiness: boolean;
    BusinessType: string;   
} 

export const Signup = async( payload: userPayload): Promise<IReturnObject> => {
 
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
            return request.data as IReturnObject;
    } catch (error) {

        console.log('Obj '+ReturnObj.errorData) 
        ReturnObj.error = true;
        ReturnObj.errorMessage = 'An error occured while trying to Create your account';
        ReturnObj.errorData = error;
        ReturnObj.statusCode = 400;
        return ReturnObj;

    }
}