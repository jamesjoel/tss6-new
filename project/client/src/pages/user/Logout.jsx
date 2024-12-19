import React from 'react'
import { useNavigate, Navigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { loggedOut } from '../../redux/UserAuthSlice';

const Logout = () => {
    let dispatch = useDispatch();
    localStorage.removeItem("access-user");

    dispatch(loggedOut());
    

  return (
    <Navigate to="/login" />
  )
}

export default Logout