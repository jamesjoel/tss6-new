import axios from "axios"
import { API_URL } from "../constants/API_URL"


const TOKEN = localStorage.getItem("access-user");

let getUserProfile = async()=>{
    let response = await axios.get(`${API_URL}/user/profile`, {
        headers : {Authorization:TOKEN}
    })
    console.log(response.data[0])
    return response.data[0];
}

export {getUserProfile}