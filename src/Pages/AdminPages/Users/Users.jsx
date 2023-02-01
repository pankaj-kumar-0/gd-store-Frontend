import React, { useEffect } from "react";
import "./Users.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { AllUsers } from "../../../store/Slices/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import STATUSES from "../../../store/Statuses";
import Loader from "../../../Components/Loader/Loader";
import { Link } from 'react-router-dom';
import moment from "moment";
import { toast } from "react-toastify";

const Users = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.allUsers);
  const { users } = data;

  useEffect(() => {
    dispatch(AllUsers({}));
    if(error){
      toast.error(error.message);
    }
  }, [dispatch]);
  return (
    <>
      <div className="admin_heading">All Users</div>
      {status === STATUSES.LOADING ? (
        <Loader />
      ) : (
        <div className="admin_table">
          <div className="res">
            <table>
              <thead>
                <tr>
                  <th>Joined On</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {users &&
                  users.map((item, index) => (
                    <tr key={item._id} >
                      <td>{moment(item.createdAt).format("lll")}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.isAdmin ? "Admin":"User"}</td>
                      <td className="more" >
                        <Link to= {`${item._id}`} ><FontAwesomeIcon icon={faEye} className="list_icon" /></Link>                      
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Users;
