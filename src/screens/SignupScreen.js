//Day-2 of build (Authentication and plans profile screen)
import React, { useRef } from 'react'
import { auth } from '../firebase';
import './SignupScreen.css';

function SignupScreen() {
    const emailRef = useRef(null);      //here useRef is a hook in react , we can have the reference to that field
    const passwordRef = useRef(null);       //to capture the information from input typically we have a piece of state that track the input but here 

    //function for new register
    const register = (e) => {   
        e.preventDefault();     //it will prevent the typical refresh so anytime a button is inside of a form it will typically refresh so to prevent that we use 

        //whenever we click on register button what we want is to create an account with the user email n passwrd
        auth.createUserWithEmailAndPassword(    //pasing an email n passwrd
            emailRef.current.value,         //for the email go to the email ref so the current thing is pointing at as a property called current and the we say get the value sowhatever the user typ in tht field
            passwordRef.current.value   //this will go ahead and create a user with email n passwrd
        ).then((authUser) => {      //then once it is created it will give me back the user info
            console.log(authUser);
        }).catch(error => {         //if at any point there is an error it will catch the error and alert that on the screen 
            alert(error.message);
        });
    };

    //function for sign in 
    const signIn = (e) => {
        e.preventDefault();     //It wont do a refresh on clicking
        // so anytime a button is inside of a form it will typically refresh so to prevent that we use 
        auth.signInWithEmailAndPassword(
            emailRef.current.value,     //for the email go to the email ref so the current thing is pointing at as a property called current and the we say get the value sowhatever the user typ in tht field
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => alert(error.message));
    };

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email"/>      {/*here attaching the ref so refernce for the email field is emailRef */}
                <input ref={passwordRef} placeholder="Password" type="password"/>    {/*here attaching the ref so refernce for the passwrd field is passwrdRef */}
                <button type="submit" onClick={signIn}>Sign In</button>     {/*it will trigger the signin function  */}
                <h4><span className="signupScreen__grey">New to Netflix?</span>
                <span className="signupScreen__link" onClick={register}> Sign up now.</span>        {/*it will trigger the register function  */}
                </h4>
            </form>
        </div>
    )
}

export default SignupScreen

