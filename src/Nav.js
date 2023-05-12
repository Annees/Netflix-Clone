// DAY- 1 of BUILD
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faGift,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import "./Nav.css";
import { auth } from "./firebase";

function Nav() {
  const [show, handleShow] = useState(false); //piece of state (usestate is a way of defining variables in react) whose default value is false
  const [dropdown, setDropdown] = useState(false);
  const history = useHistory(); //this is a hook called usehistory which gives us a history

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      //if the window scroll vertical more than 100
      handleShow(true); //then you should show the nav bar black
    } else {
      handleShow(false); //else
    }
  };

  const handleDropdown = () => {
    if (!dropdown) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  //we are using useeffect forevent
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar); //this event listener, every time we scroll it will listen to that eventand then trigger the function transitionNavbar
    return () => {
      window.removeEventListener("scroll", transitionNavbar); //cleanup function so it gonna remove that function being attached to the event listener
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      {" "}
      {/*this says that only render navblack clss if this show variable is true */}
      <div className="nav__contents">
        <div className="nav__contents1">
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
            className="nav__logo"
            onClick={() => history.push("/")}
          />
          <ul className="nav__contents1-navItems">
            <li style={{ fontWeight: "bolder" }}>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>News & Popular</li>
            <li>My List</li>
          </ul>
        </div>
        <div className="nav__contents2">
          <FontAwesomeIcon icon={faSearch} color="white" />
          <FontAwesomeIcon icon={faGift} color="white" />
          <FontAwesomeIcon icon={faBell} color="white" />
          <div className="nav__contents2-profile" onClick={handleDropdown}>
            <img
              src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABa4D3GTp_NJnmsRwEPccmkPZWlwBTq-sKIpw1gOo1zbhAcixgwzKnVm_87jCYX3hQsrIZesG79mmISXxs_NrXAM.png?r=88c"
              alt=""
              className="nav__avatar"
            />
            <FontAwesomeIcon icon={faCaretDown} color="white" />
            {dropdown && (
              <div
                className="nav__account-dropdown"
                onMouseLeave={handleDropdown}
              >
                <ul className="nav__dropdown-profiles">
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABeeinKf4qjR-VAaPOviRjcglAoSBnJKs2fY1tfA0nEj-xw-O_KK3gcSUYa2BOh9hE6ThxPEvcS4djBufuLM2ZV0.png?r=535"
                      alt=""
                    />
                    <p>Profile 1</p>
                  </li>
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABZIK6jqsRHlhlEmDoON8jYhl3g9VML7tmyNKM-HIpNkeAJJRKEyUVCig6fqILzcM_dspEFHOczXgfQgtHCGxiUI.png?r=a29"
                      alt=""
                    />
                    <p>Profile 2</p>
                  </li>
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABa4D3GTp_NJnmsRwEPccmkPZWlwBTq-sKIpw1gOo1zbhAcixgwzKnVm_87jCYX3hQsrIZesG79mmISXxs_NrXAM.png?r=88c"
                      alt=""
                    />
                    <p>Profile 3</p>
                  </li>
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABeWhh90Jhr88FfkPPsQzlkfArIFv6ztxOLHR3gweFd7iqahxtOH8Cqw7GuSfQJBcxkbMkINDQDx1oFQw3c2gPH0.png?r=cea"
                      alt=""
                    />
                    <p>Profile 4</p>
                  </li>
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABeW5HcypgSvS07jaMxDem7uIudk2vYwvVAYKBiwj9QJdRhHAxjwdVSvYJ1dlXVqACKABoBnzlVZehSG-VzhEp5A.png?r=8fb"
                      alt=""
                    />
                    <p>Profile 5</p>
                  </li>
                </ul>
                <div className="nav__dropdown-manage">
                  <p onClick={() => history.push("/profiles")}>
                    Manage Profiles
                  </p>
                </div>
                <ul className="nav__dropdown-account">
                  <li onClick={() => history.push("/profile")}>Account</li>
                  <li>Help center</li>
                  <li onClick={() => auth.signOut()}>Sign out of Netflix</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;

// {/*this is netflix logo on top left corner */}
{
  /* <img                
onClick={() => history.push("/")}
className="nav__logo"
src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" 
alt="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>
{/*this is netflix avatar logo on top right corner */
}
{
  /* <img                                            
onClick={() => history.push("/profile")}
className="nav__avatar"
src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
alt=""/> */
}
