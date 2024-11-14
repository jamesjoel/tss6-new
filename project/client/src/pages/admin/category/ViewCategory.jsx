import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { API_URL } from '../../../constants/API_URL'

const ViewCategory = () => {
    let [cate, setCate] = useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}/category`)
        .then(response=>{
            setCate(response.data);
        })
    },[])

  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
                <h4>List of All Category</h4>
                <table className="table table-dark table-bordered my-3 table-striped table-hover">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Category Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cate.map((item, index)=><tr>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ViewCategory