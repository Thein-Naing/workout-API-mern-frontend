// 1.import createContext function from react
import { createContext, useReducer } from "react";

//2.then store/create require context for provider & export it.
export const AuthContext = createContext();


//4. then create authReducer function for provider & export.
export const authReducer = (state, action) => {
  // inside function we will handle all cases. here login and logout cases.
  // so we will use switch method.
  switch(action.type) {
    case 'LOGIN':
      return {user: action.payload}
    case 'LOGOUT':
      return {user: null}
    default:
      return state
  }
}

// 3.then using this context to create provider function into our application component tree
//so that all our components can access it.
// provider function take children as argument aka props
// children represent whatever this provider wrap whatever components
export const AuthContextProvider= ({children}) => {
  // register the useReducer state and export it
  // 1st argument is authReducer fuction & 2nd argument is initial state value.
  const [state, dispatch ] = useReducer(authReducer, {
    user: null
  })


  //5. test it  and console/log it.
  console.log('AuthContext state:', state)
}



export default AuthContext
