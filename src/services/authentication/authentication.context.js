import React, { useState, createContext } from "react";
import * as firebase from "firebase";
import { loginRequest } from "./authentication.service";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  
  const onRenderNewScreen = () => {
    setError(null);
  };
  const onLogin = (email, password) => {
    console.log("in login");
    setIsLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log(u);
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
        setError(e.toString());
      });
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((u) => {
    //     console.log(u);
    //     setUser(u);
    //     setIsLoading(false);
    //   })
    //   .catch((e) => {
    //     setIsLoading(false);
    //     setError(e.toString());
    //   });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (!email || !password) {
      setIsLoading(false);
      setError("Must enter email and password");
      return;
    }
    if (password !== repeatedPassword) {
      setIsLoading(false);
      setError("Error: Passwords do not match");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin: onLogin,
        onRegister: onRegister,
        onRenderNewScreen: onRenderNewScreen,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
