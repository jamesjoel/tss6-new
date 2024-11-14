import * as YUP from 'yup';
import axios from 'axios'
import { API_URL } from '../constants/API_URL';

let SingupSchema = YUP.object({
    name : YUP.string().test("xyz", "First Letter Should be Capital", (a)=>{ // a = "James"
      let arr = a.split(""); // [J, a, m, e, s]
      let x = arr[0]; // J
      if(x.toUpperCase() == x)
      {
        return true;
      }
      else{
        return false;
      }

    }).required("Insert Your Name"),



    email : YUP.string().email("Insert Correct Email Id")
    // .test("checkUsername", "This Username/Email is already taken", async(a)=>{
    //   let response = await axios.get(`${API_URL}/signup/checkusername/${a}`);
    //   return response.data;



    // })
    .required("Insert Your Email Id"),
    
    
    
    
    password : YUP.string().test("abc", "Password should be more then 3 char", (a)=>{
      if(a.length <= 3){
        return false
      }else{
        return true;
      }

    }).required("Insert Your Password"),
    repassword : YUP.string().oneOf([YUP.ref("password")], "Password and Re-Password should be same").required("Insert Your Re-Password"),
    contact : YUP.number().typeError("Invalid Contact Number").min(1000000000, "Number Should Be 10 Digit").max(9999999999, "Number Should Be 10 Digit").required("Insert Your Contact Number"),
    gender : YUP.string().required("Select Your Gender"),
    state : YUP.string().required("Select Your State"),
    city : YUP.string().required("Select Your City"),
    address : YUP.string().required("Insert Your Full Address")
  });

  export default SingupSchema;