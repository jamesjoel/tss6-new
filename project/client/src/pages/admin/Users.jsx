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

    let changeStatus = async(obj)=>{
        let response = await axios.put(`${API_URL}/users/changestatus/${obj._id}/${obj.status}`);
        console.log(response.data);
        let x = obj.status == true ? false : true;
        let id = obj._id;

        setUsers(()=>{
            let arr = users.map(item=>{
                if(item._id == id){
                    item.status = x;
                    return item;
                }else{
                    return item;
                }
                
            });

            return arr;
        })
    }

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
                            <th>Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item, index)=><tr key={item._id}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                                <td>
                                   <button onClick={()=>changeStatus(item)} className={'btn btn-sm ' + (item.status ? 'btn-danger' : 'btn-success')}>{item.status ? 'Deactive' : 'Active'}</button>
                                </td>
                                
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