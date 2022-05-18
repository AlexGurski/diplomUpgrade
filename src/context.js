import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider  = ({children}) =>{
    const [accountName,setAccountName] = useState({
        name:'',
        purshise:'',
        logined:false,
        permission:0
    })
    return (
        <UserContext.Provider value={{accountName,setAccountName}}>
            {children}
        </UserContext.Provider>
    )
}