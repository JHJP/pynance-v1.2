import React from "react";
import {userRegister, userLogin, userProfileRegister} from "../components/API";

var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true };
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem("id_token"),
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

function Authentication(){
  window.location.href='https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=850136a0-43c8-415b-9843-98eefef0d14c&redirect_uri=http://localhost:3000/&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0'
};



export { UserProvider, useUserState, useUserDispatch, registerUser, loginUser, signOut, Authentication };

// ###########################################################

function registerUser(dispatch, firstName, lastName, login, password, userseqno, refreshtoken, accesstoken, history, setIsLoading, setError) {
  setError(false);
  setIsLoading(true);
  if (!!login && !!password) {
    setTimeout(() => {
      // localStorage.setItem('id_token', 1)
      setError(null)
      setIsLoading(false)
      // dispatch({ type: 'LOGIN_SUCCESS' })
      userRegister({username:login, first_name:firstName, last_name:lastName, email:login, password:password})
      userProfileRegister({Name:firstName+lastName, Email:login, Userseqno:userseqno, Refreshtoken:refreshtoken, Accesstoken:accesstoken})
      // history.push('/app/dashboard')
    }, 2000);
  } else {
    dispatch({ type: "LOGIN_FAILURE" });
    setError(true);
    setIsLoading(false);
  }
}

function signOut(dispatch, history) {
  localStorage.removeItem("id_token");
  dispatch({ type: "SIGN_OUT_SUCCESS" });
  history.push("/login");
}

function loginUser(dispatch, login, password, history, setIsLoading, setError, setToken) {
  setError(false);
  setIsLoading(true);
  if (!!login && !!password) {
    setTimeout(() => {
      localStorage.setItem('id_token', 1)
      setError(null)
      setIsLoading(false)
      dispatch({ type: 'LOGIN_SUCCESS' })
      userLogin({username:login, password:password}, setToken)
      history.push('/app/dashboard')
    }, 2000);
  } else {
    dispatch({ type: "LOGIN_FAILURE" });
    setError(true);
    setIsLoading(false);
  }
}
