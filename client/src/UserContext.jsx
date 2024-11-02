import { createContext, useEffect, useState } from "react";


// export const UserContext = createContext({})
export const UserContext = createContext({ user: null, setUser: () => {} });

// export function UserContextProvider ({children})
// {
//   const[user,setUser] = useState('null')
//   return(
//     <UserContext.Provider value={user,setUser}>
//     {children}
//     </UserContext.Provider>
//   )
// }
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null); // Initialize user as null
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Save user to localStorage when user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}