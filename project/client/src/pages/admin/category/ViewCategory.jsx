import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { API_URL } from '../../../constants/API_URL'
import DeleteComponent from '../../../components/admin/DeleteComponent';
import DeleteButton from '../../../components/admin/DeleteButton';
import { NavLink } from 'react-router-dom';

const ViewCategory = () => {
    let [allCate, setAllCate] = useState([]);
    let [cate, setCate] = useState({});

    useEffect(()=>{
        axios.get(`${API_URL}/category`)
        .then(response=>{
            setAllCate(response.data);
        })
    },[])

    let askDeleteHandler = (obj)=>{
        setCate(obj);
    }
    let confDeleteHandler = async ()=>{
        let response = await axios.delete(`${API_URL}/category/${cate._id}`);
        
        setAllCate(()=>allCate.filter(item=> item._id != cate._id)) 
            
    }

  return (
    <>
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
    
                <h4>List of All Category</h4>
                <table className="table table-dark table-bordered my-3 table-striped table-hover">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Category Name</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCate.map((item, index)=><tr key={item._id}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>
                                    {/* <button onClick={()=>askDeleteHandler(item)} data-toggle="modal" data-target="#delModal" className='btn btn-danger btn-sm'><i className="fa fa-trash" aria-hidden="true"></i></button> */}
                                    <DeleteButton onClick={askDeleteHandler} item={item}/>
                                </td>
                                <td>
                                    <NavLink to={'/admin/category/edit/'+item._id} className='btn btn-info btn-sm'>
                                        <i className='fa fa-pencil-square-o'></i>
                                    </NavLink>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <DeleteComponent title={'Category'} name={cate.name} confDeleteHander={confDeleteHandler}  />
    
    {/* <div className="modal fade" id="delModal" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Delete Category</h3>
                </div>
                <div className="modal-body">
                    <p>Are you sure want to delete <b>{cate.name}</b> category !</p>
                </div>
                <div className="modal-footer">
                    <button data-dismiss="modal" onClick={confDeleteHandler} className='btn btn-danger'>Confirm</button>
                    <button data-dismiss="modal" className='btn btn-dark'>Close</button>
                </div>
            </div>
        </div>
    </div> */}



    </>
  )
}

export default ViewCategory


/*
npm install <module>



npm i create-react-app


create-react-app <folder>


npm i



npm i @angular/cli -- v13

ng new <folder>



*/