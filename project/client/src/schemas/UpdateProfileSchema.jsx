import * as YUP from 'yup';
import axios from 'axios'
import { API_URL } from '../constants/API_URL';

let UpdateProfileSchema = YUP.object({
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

    contact : YUP.number().typeError("Invalid Contact Number").min(1000000000, "Number Should Be 10 Digit").max(9999999999, "Number Should Be 10 Digit").required("Insert Your Contact Number"),
    gender : YUP.string().required("Select Your Gender"),
    state : YUP.string().required("Select Your State"),
    city : YUP.string().required("Select Your City"),
    address : YUP.string().required("Insert Your Full Address")
  });

  export default UpdateProfileSchema;