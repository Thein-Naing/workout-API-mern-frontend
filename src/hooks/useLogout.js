// // import useAuthContext
// import { useAuthContext } from "./useAuthContext";

// export const useLogout = () => {
//   const { dispatch } = useAuthContext();
//   const logout = () => {
//     //remove user from storage
//     localStorage.setItem("user");

//     //dispatch the logout action
//     dispatch({ type: "LOGOUT" });
//   };

//   return { logout };
// };


// // use this hook inside Navbar.


import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
  }

  return { logout }
}
