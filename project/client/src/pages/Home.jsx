import React, {useState, useEffect} from 'react'
import Slider from '../components/Slider'
import ShopWithUs from '../components/ShopWithUs'
import ProductBox from '../components/ProductBox'
import TopBar from '../components/TopBar'
import axios from 'axios'
import {API_URL} from '../constants/API_URL'

const Home = () => {

   let [allPro, setAllPro] = useState([]);
   useEffect(()=>{
      getAllPro();
   },[])

   let getAllPro = async()=>{
      let response = await axios.get(`${API_URL}/product`, {
         headers : { Authorization : "rohit" }
      });
      
      setAllPro(response.data);
   }

   
   let PageName = "Home";

  return (
   <>
   {/* <Slider /> */}
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
                  allPro.map(item=><ProductBox pro={item} key={item._id} />)
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