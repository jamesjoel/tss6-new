import * as YUP from 'yup'

let SubCateSchema = YUP.object({
    name : YUP.string().required("Insert Sub Category Name"),
    categoryid : YUP.string().required("Select Your Category")
})

export default SubCateSchema;