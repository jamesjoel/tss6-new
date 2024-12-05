import * as YUP from 'yup'

let ChangePassSchema = YUP.object({
    currentpass : YUP.string().required("Insert Current Password"),
    newpass : YUP.string().required("Insert New Password"),
    confirmnewpass : YUP.string().oneOf([YUP.ref("newpass")], "New Password and Confirm Password should be same").required("Insert Confirm Password"),
})

export default ChangePassSchema;