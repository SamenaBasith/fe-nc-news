import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        username:"tickle122",
        name:"tickle",
        avatar_url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/137286/s960_Untitled_design__15_.png"
    })

    const isLoggedIn = user != null;
    
    return (
    <UserContext.Provider 
    value={{user, setUser, isLoggedIn}}> 
    {children} 
    </UserContext.Provider>
    );
}

