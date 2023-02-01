import React, { useState, useEffect } from "react";
import "./UpdateProfile.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../../Components/Loader/Loader";
import {
  clearUpdatedUserError,
  resetUpdatedUserState,
  UpdateUserProfile,
  UserDetail,
} from "../../../store/Slices/UserSlice";
import STATUSES from "../../../store/Statuses";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const [newPassword, setNewPassword] = useState("");
  const [confiremPassword, setconfiremPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { data } = useSelector((state) => state.user);
  const { user } = data;

  const {
    data: newData,
    error,
    status,
  } = useSelector((state) => state.updateUserProfile);
  const { message } = newData;

  const handleUpdateUser = (e) => {
    e.preventDefault();
    if (newPassword !== confiremPassword) {
      toast.error("Passwords are not same");
    } else {
      dispatch(UpdateUserProfile({ name, email, password: newPassword }));
    }
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
    if (error) {
      toast.error(error.message);
      dispatch(clearUpdatedUserError());
    }
    if (message) {
      toast.success(message);
      dispatch(resetUpdatedUserState());
      dispatch(UserDetail({}));
    }
  }, [user, error, message,dispatch]);

  return (
    <>
      <div className="update_profile">
        <h1 className="heading">Update profile</h1>
        <div className="container">
          {status === STATUSES.LOADING ? (
            <Loader />
          ) : (
            <form onSubmit={handleUpdateUser}>
              <div className="box">
                <div className="col">
                  <p>Name</p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col">
                  <p>Email</p>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="box">
                <div className="col">
                  <p>New Password</p>
                  <input
                    type="text"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="col">
                  <p>Confirm Password</p>
                  <input
                    type="text"
                    value={confiremPassword}
                    onChange={(e) => setconfiremPassword(e.target.value)}
                  />
                </div>
              </div>
              <button className="btn more" type="submit">
                Update Profile
              </button>
            </form>
          )}
        </div>
      </div>
      
    </>
  );
};

export default UpdateProfile;
