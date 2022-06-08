import React, { createContext, useState, useEffect, useContext } from 'react';
import { STRUCT_API } from '../util/Struct_API';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [authData, setAuthData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();
  const [navigations, setNavigations] = useState([]);

  const updateDetails = (data) => {
    setLoading(true);
    API.PUT(`update/${data.id}`)(data)
    .then(response => {
      if(response.data.errors){
        setErrors(response.data.errors);
      }
      if(response.data.success){
        alert(response.data.success);
        setAuthData(response.data.user);
        setErrors({});
      }
    }).catch(error=>{
      alert(JSON.stringify(error))
    }).finally(() => {
      setLoading(false);
    });
  }

  const changePassword = (data) => {
    setLoading(true);

    API.PUT(`changepass/${data.id}`)(data)
    .then(response => {
      if(response.data.errors){
        setErrors(response.data.errors);
      }
      if(response.data.success){
        alert(response.data.success);
        setErrors({});
      }
    }).catch(error=>{
      alert(JSON.stringify(error))
    }).finally(() => {
      setLoading(false);
    });
  }

  const register = (data) => {
    setLoading(true);
    API.POST('register')(data)
    .then(response => {
      if(response.data.errors){
        setErrors(response.data.errors);
      }
      if(response.data.success){
        setAuthData(response.data.user);
      }
    }).catch(error => {
      alert(JSON.stringify(error))
    }).finally(() =>{
      setLoading(false);
    });
    
  }

  const login = (data) => {
    setLoading(true);
    STRUCT_API.POST(data, 'login')
    .then(response => {
      console.log(response);
      if(response.status === 'fail'){
        console.log('fail');
        setErrors(response.message);
      }
      if(response.status === 'success'){
        console.log(JSON.stringify(response));
          setAuthData(response);
      }
      // if(response.data.success){
      //   console.log(response);
      //   setAuthData(response.data.user);
      //   // alert(JSON.stringify(response.data.user))
      // }
    }).catch(error => {
      alert(JSON.stringify(error))
    }).finally(()=>{
      setLoading(false);
    })
  }

  const numberWithCommas = (number) => {
    return number &&  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const logout = () => {
    setAuthData(undefined);
  }
  const contextValue = {
    authData,
    login,
    loading,
    errors,
    setErrors,
    logout,
    register,
    setLoading,
    changePassword,
    updateDetails,
    navigations,
    setNavigations,
    numberWithCommas
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}



