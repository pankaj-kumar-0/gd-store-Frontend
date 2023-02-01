import React from "react";
import "./Profile.css";
import user_img from "../../../Asset/Images/user.png";
import moment from "moment";
import { useSelector } from "react-redux";
import STATUSES from "../../../store/Statuses";
import Loader from "../../../Components/Loader/Loader";
import { Link } from "react-router-dom";


const Profile = () => {

  const { data, status } = useSelector((state) => state.user);
  const { user } = data;

  return (
    <>
      {status === STATUSES.LOADING ? (
        <Loader />
      ) : (
        <div className="profile_page">
          <div className="profile_page_container">
            <div className="box">
              <div className="col1">
                <img src={user_img} alt="profile" />
                <div>
                  <h4>Joined</h4>
                  <p>{moment(user.createdAt).format("LLL")}</p>
                </div>
              </div>
              <div className="col2">
                <h2>My Profile</h2>
                <div>
                  <h4>User Name</h4>
                  <h3>{user.name}</h3>
                </div>
                <div>
                  <h4>User Email</h4>
                  <h3>{user.email}</h3>
                </div>
              </div>
            </div>
            <div className="link_box">
                <Link to='/profile/update' className="btn more" >Update Profile</Link>
                <Link to='/profile/orders' className="btn more" >All Orders</Link>
            </div>
          </div>
  
        </div>
      )}
    </>
  );
};

export default Profile;
