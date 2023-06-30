import * as axios from 'axios'
// import firebase from 'firebase'
import { IReturnObject } from '../globals/ReturnObject'
// import { Firebase } from 'globals/Firebase'
import { BASEURL } from '../globals/URL'

type userPayload = {
    interests : Array<string>
} 

export const UpdateInterests = async(payload: userPayload): Promise<IReturnObject> => {
    const ReturnObj: IReturnObject = {
        error: false,
        data: null,
        errorMessage: '',
        errorData: null,
        successMessage: '',
        statusCode: 200
    }
    try {
        // get the full name
        // make request to vently server
        const request = await axios.default.put(`${BASEURL.URL}/user/interests/${localStorage.getItem('id')+""}`, payload, {
                headers: { 'content-type': 'application/json'}
            })   
            sessionStorage.setItem('token', localStorage.getItem('id')+"");
            return request.data as IReturnObject;
    } catch (error) {
        ReturnObj.error = true;
        ReturnObj.errorMessage = 'An error occured while trying to Create your account';
        ReturnObj.errorData = error;
        ReturnObj.statusCode = 400;
        return ReturnObj;
    }
}