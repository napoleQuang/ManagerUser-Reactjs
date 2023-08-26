import { createContext } from 'react';
import { useState } from 'react';
const UserContext = createContext({ email: '', auth: false });


const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ email: '', auth: false });

    const login = (email) => {
        setUser(({
            email,
            auth: true
        }));
    }

    const logout = () => {
        setUser({
            email: '',
            auth: false
        });
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    }

    return (
        <UserContext.Provider value={{ login, logout, user }}>
            {children}
        </UserContext.Provider>
    );
}

export {UserContext,UserProvider}