import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
<<<<<<< HEAD
   const navigate= useNavigate()
=======
  const navigate = useNavigate();
>>>>>>> 4a0af096d2222fb7cee9036179eca9d5ae7c5648
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  console.log("profile");
  // useEffect(() => {
  //   if (isAuthenticated === false) {
  //     navigate("/login");
  //   }
  // }, [isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/me/update">Edit Profile</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
