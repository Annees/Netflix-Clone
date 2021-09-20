import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from "./screens/Homescreen";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import Profiles from './screens/Profiles';

function App() {
  const user = useSelector(selectUser);   //selectuser is the name of the selector and this will give me the user back  //we have here change the value from null, so now that the values of the user has been dispatch into the store by using the login action from userslice
  // so now the second task is to get the value out of the store using the selectors(which goes into the state of the global store then goes into userSlice and get the user from this store)
  const dispatch = useDispatch();     //hook

  useEffect(() => {         //useeffect is basically listens to the users loggedin state
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {   //this is something called a listener coz it listens to any authenticated state change and the advntage off firebase is whenever u go ahead even if u are loggedin n u refresh it will store it to your local memory in ur browser in a cookie and it knows that u are logedin from before
      if (userAuth){            //if the user exist              //onAuthStateChanged gives us something called a userAuth call back    
        //loggedin
        // console.log(userAuth);
        dispatch(     //we are dispatching the login event
          login({   //it will push the user into the store
            uid: userAuth.uid,      //we are passing here payload now the payload is basically what we are gonna set the user to so we are passing the object here
            email: userAuth.email
          })
        );
      }else{
        //loggedout
        dispatch(logout())    //when we are logged out then it will dispatch logout and we need to import the logout action from userslice and it will reset the user back to null 
      }
    });                  //it is basicaly a listener coz it basically listens to any autheticated state change

    return unsubscribe;   //cleanup function since ithe component was ever unmount we dont want to duplicate another listener we just want to detached the old one and attach the new one 
    //basically it is equivalent to when cleans up runs the unsubcribe function
  }, [dispatch]); //this useeffect is dependent on dispatch

  return (
    <div className="app">
      <Router>
        {!user ? (    //if there is no user i want to render the loginScreen
          <LoginScreen />
        ) : (       //otherwise the rest of the app
          <Switch>                           {/* A <Switch> looks through its children <Route>s an renders the first one that matches the current URL. */}
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route path="/profiles">
              <Profiles />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
        
      </Router>
    </div>
  );
}

export default App;
