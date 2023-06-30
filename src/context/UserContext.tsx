import React from 'react'; 

export interface IUser {
    userData: any, 
    setUserData: Function,
    token: any, 
    setToken: Function, 
}

export const UserContext = React.createContext({} as IUser);

const UserContextWrapper = (props: any) => {

    const [token, setToken] = React.useState(''); 
    const [userData, setUserData] = React.useState({} as any); 
    
    return (
        <UserContext.Provider value={{userData, setUserData, token, setToken}}>
            {
                props.children
            }
        </UserContext.Provider>
    )
}

export default UserContextWrapper;