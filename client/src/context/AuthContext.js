import {createContext, useReducer} from "react"
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
      _id:
"658924550a75c1edf6fdbdfc",
username:
"mesud",
email:
"mesud@gmail.com",
password:
"$2b$10$9TkgNR8QHClhqAFSl9l0Z.fw2KsKKlhITc.K6jqrm/uEgjr9Z7L3i",
profilepicture:
"person/4.jpeg",
coverpicture:
"",

following:
Array (1),
isAdmin:
false,

    },
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch]  = useReducer(AuthReducer, INITIAL_STATE) 
    

   return(
    <AuthContext.Provider value = {{
        user: state.user, 
        isFetching: state.isFetching, 
        error: state.error,
        dispatch}}>
      
      {children}
    </AuthContext.Provider>
   )
    
}