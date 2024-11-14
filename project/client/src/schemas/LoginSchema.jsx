import * as YUP from 'yup'

let LoginSchema = YUP.object({
    email : YUP.string().email("Email id is wrong").required("Insert Email Id"),
    password : YUP.string().required("Insert Password"),
})

export default LoginSchema;