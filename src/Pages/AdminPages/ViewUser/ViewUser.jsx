import moment from "moment";
import React, { useEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ErrorBox from "../../../Components/ErrorBox/ErrorBox";
import Loader from "../../../Components/Loader/Loader";
import { clearOperationUserError, DeleteUser, resetOperationUserState, SingleUser, UpdateUserRole } from "../../../store/Slices/UserSlice";
import STATUSES from "../../../store/Statuses";
import "./ViewUser.css";

const ViewUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useRef();
  const { id } = useParams();

  const { data, status, error } = useSelector((state) => state.singleUser);
  const { data:roleSuccess, error:roleError } = useSelector((state) => state.operationUser);

  const { user } = data;

  useEffect(() => {
    dispatch(SingleUser({ id }));
  }, [dispatch ,id]);
  

  useEffect(() => {
    if(roleSuccess==="The User is deleted successfully!"){
        toast.success(roleSuccess);
        navigate(-1)
        dispatch(resetOperationUserState())
    }
    if(roleSuccess==="User role updated successfully"){
        toast.success(roleSuccess);
        dispatch(resetOperationUserState())
        dispatch(SingleUser({ id }));
    }
    if(roleError){
        toast.error(roleError.message);
        dispatch(clearOperationUserError())
    }
  }, [dispatch ,id ,roleSuccess ,roleError ,navigate]);

   

  const handleUpdateRole =(e)=>{
    e.preventDefault();
    // console.log(form.current.isAdmin.value);
    dispatch(UpdateUserRole({ id,  isAdmin : form.current.isAdmin.value}))
  }

  const handleDelete = ()=>{
    dispatch(DeleteUser({id}));
  }

  return (
    <div>
      <div className="admin_heading">User Profile</div>
      {status === STATUSES.LOADING ? (
        <Loader />
      ) : status === STATUSES.ERROR ? (
        <ErrorBox message={error.message} />
      ) : (
        user && <>
        <div className="view_profile">
          <div className="conatiner1">
            <div className="col">
              <h5>User Name </h5>
              <span>{user.name}</span>
            </div>
            <div className="col">
              <h5>User Email</h5> <span>{user.email}</span>
            </div>
            <div className="col">
              <h5>User joined on </h5>
              <span>{moment(user.createdAt).format("LLL")}</span>
            </div>
            <div className="col">
              <h5>User ID </h5>
              <span>{user._id}</span>
            </div>
            <div className="col">
              <h5>User Role </h5>
              <span>{user.isAdmin ? "Admin":"User"}</span>
            </div>
          </div>
          <div className="conatiner2">
            <div className="box">
              <h4>User Role</h4>
              <form ref={form} onSubmit={handleUpdateRole} >
                <select className="choose" name="isAdmin" >
                  <option value="false">User</option>
                  <option value="true">Admin</option>
                </select>
                <button className="btn extra">Update Role</button>
              </form>
              <div className="delete">
                <button className="btn extra" onClick={handleDelete} >Delete Profile</button>
              </div>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default ViewUser;
