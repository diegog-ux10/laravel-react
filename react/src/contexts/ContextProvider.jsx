import {createContext, useContext, useState} from "react";

const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {}
})

export const ContextProvider = ({children}) => {

  const [user, setUser] = useState({
    name: 'Diego'
  });
  const [token, _setToken] = useState(null);

  const setToken = (token) => {
    _setToken(token)
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  }

  let SetToken;
  return (
    <StateContext.Provider value={{
      user,
      token,
      setUser,
      SetToken
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
