//Day-2 of build (Authentication and plans profile screen)
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Footer from "../Footer";
import Nav from "../Nav";
import PlansScreen from "./PlansScreen";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Account Details</h1>
        <div className="profileScreen__info">
          {/* Need uncommenting if needed */}
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
              <h2>Password: *********</h2>
              <p>Change account password</p>
            </div>
            <div className="profile__detailsRow">
              <h2>Phone: (111) 111-1111</h2>
              <p>Change phone number</p>
            </div>
            {user.subscription && (
              <div className="profile__detailsRow">
                <h2>
                  Your next billing date is{" "}
                  {new Date(
                    user.subscription?.current_period_end * 1000
                  ).toLocaleDateString()}
                </h2>
                <p>Manage payment info</p>
              </div>
            )}
          </div>
          {/* Need uncommenting if needed */}

          {/* <img
            src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABa4D3GTp_NJnmsRwEPccmkPZWlwBTq-sKIpw1gOo1zbhAcixgwzKnVm_87jCYX3hQsrIZesG79mmISXxs_NrXAM.png?r=88c"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>

              <PlansScreen />

              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div> */}
        </div>

        {/* Need uncommenting if needed */}
        <div className="profile__plans">
        {/* <h3>Plans {user.subscription && `(Current plan: ${user.subscription?.role})`}</h3> */}

        {/* <PlansScreen /> */}

        <button className="profile__signOut" onClick={() => auth.signOut()}>
            Sign Out of Netflix
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfileScreen;
