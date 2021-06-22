//Day-2 of build (Authentication and plans profile screen)
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Footer from '../Footer';
import Nav from '../Nav';
import PlansScreen from './PlansScreen';
import "./ProfileScreen.css"

function ProfileScreen() {

    const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Account Details</h1>
                <div className="profileScreen__info">
                    <div className="profile__membership">
                        <h2>MEMBERSHIP & BILLING</h2>
                        <button>Cancel Membership</button>
                    </div>
                    <div className="profile__details">
                        <div className="profile__detailsRow">
                            <h2>{user.email}</h2>
                            <p>Change account email</p>
                        </div>
                        <div className="profile__detailsRow">
                            <h2>Password: *****</h2>
                            <p>Change account password</p>
                        </div>
                        <div className="profile__detailsRow">
                            <h2>Phone: (111) 111-1111</h2>
                            <p>Change phone number</p>
                        </div>
                        {user.subscription &&
                            <div className="profile__detailsRow">
                                <h2>Your next billing date is {new Date(user.subscription?.current_period_end * 1000).toLocaleDateString()}</h2>
                                <p>Manage payment info</p>
                            </div>
                        }

                    </div>
                    {/* <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt=""
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>

                            <PlansScreen />

                            <button onClick={() => auth.signOut()} className="profileScreen__signOut">Sign Out</button>
                        </div>
                    </div> */}
                </div>
                <div className="profile__plans">
                
                    {/* <h3>Plans {user.subscription && `(Current plan: ${user.subscription?.role})`}</h3> */}
                    
                    {/* <PlansScreen /> */}
                    
                    <button
                        className="profile__signOut"
                        onClick={() => auth.signOut()}
                    >Sign Out of Netflix</button>
                    
                </div>    
            </div>
            <Footer />
        </div>
    )
}

export default ProfileScreen
