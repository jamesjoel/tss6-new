import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {API_URL} from '../../constants/API_URL'

const Users = () => {
    let [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get(`${API_URL}/users`)
        .then(response=>{
            setUsers(response.data);
        })
    },[])


  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
                <h4>List of All Users</h4>
                <table className="table table-dark table-bordered my-3 table-striped table-hover">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item, index)=><tr>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Users