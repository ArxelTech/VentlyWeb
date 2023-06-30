export interface IReturnObject {
    error: boolean;
    errorData?: any;
    errorMessage?: string;
    successMessage?: string;
    statusCode?: number;
    data?: any;
}