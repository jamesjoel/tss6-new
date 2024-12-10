import * as YUP from 'yup'

let ProSchema = YUP.object({
    title : YUP.string().required("Insert Product Title"),
    price : YUP.string().required("Insert Product Price"),
    category : YUP.string().required("Insert Product Category"),
    subcategory : YUP.string().required("Insert Product Sub-Category"),
    discount : YUP.string().required("Insert Product Discount"),
    detail : YUP.string().required("Insert Product Detail"),
    quantity : YUP.string().required("Insert Product Qunatity"),
    image : YUP.string().test("check", "Select Image Only (.jpg|.jpeg|.png)", (value)=>{
        // console.log(value)
        let arr = value.split(".");
        let ext = arr[arr.length-1];
        if(ext=="jpg" || ext=="jpeg" || ext=="png"){
            return true;
        }else{
            return false;
        }
    }).required("Select Product Image")
})

export default ProSchema;