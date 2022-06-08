/* 
    Author: Chiekko Red Alino
    Date Created: 11/11/21
    Updated On: 
    Updated By: 
    Description: This will serve as the main navigation for the app
*/

// BEGIN: Import dependencies
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../contexts/AuthContext';
import LoggedInNavigation from './LoggedIn';
import LoggedOutNavigation from './LoggedOut';
// END

// BEGIN: Global variables if necessary but rarely
// Variables first

// END

// Default component
// Parameters: none
export default function Navigation() {
   // BEGIN: Local variable declaration

   const {authData} = useAuth();

   // END

   // BEGIN: Local methods
   // END

  
  return (
    <NavigationContainer>
      {authData ? <LoggedInNavigation /> : <LoggedOutNavigation />}
    </NavigationContainer> 
  )
}
