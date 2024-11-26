import * as YUP from 'yup'

let ProSchema = YUP.object({
    title : YUP.string().required("Insert Product Title"),
    price : YUP.string().required("Insert Product Price"),
    category : YUP.string().required("Insert Product Category"),
    subcategory : YUP.string().required("Insert Product Sub-Category"),
    discount : YUP.string().required("Insert Product Discount"),
    detail : YUP.string().required("Insert Product Detail"),
    quantity : YUP.string().required("Insert Product Qunatity"),
})

export default ProSchema;