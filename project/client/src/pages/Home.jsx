import React, {useState, useEffect} from 'react'
import Slider from '../components/Slider'
import ShopWithUs from '../components/ShopWithUs'
import ProductBox from '../components/ProductBox'
import TopBar from '../components/TopBar'
import axios from 'axios'

const Home = () => {

   let [allProduct, setAllProduct] = useState([]);

   useEffect(()=>{
      getData();
   },[])


   let getData = async()=>{
      let response = await axios.get("https://fakestoreapi.com/products");
      setAllProduct(response.data);
   }

   
   let PageName = "Home";

  return (
   <>
   <Slider />
   <TopBar PageName={PageName} />
    <section className="product_section layout_padding">
         <div className="container">
            <div className="heading_container heading_center">
               <h2>
                  Our <span>products</span>
               </h2>
            </div>
            <div className="row">
               {
                  allProduct.map(item=><ProductBox info={item} />)
               }
               
               
            </div>
            <div className="btn-box">
               <a href="">
               View All products
               </a>
            </div>
         </div>
      </section>
   <ShopWithUs />
   </>
  )
}

export default Home