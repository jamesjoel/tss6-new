 <header className="header_section">
            <div className="container">
               <nav className="navbar navbar-expand-lg custom_nav-container ">
                  <NavLink className="navbar-brand" to="/"><img width="250" src="/public/assets/images/logo.png" alt="#" /></NavLink>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav">
                     <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label">Pages <span className="caret"></span></span></a>
                           <ul className="dropdown-menu">
                              <li><a href="about.html">About</a></li>
                              <li><a href="testimonial.html">Testimonial</a></li>
                           </ul>
                        </li>

                     <li className="nav-item">
                           <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                     

                        {/* Multi-Level DD Start */}
                        
                        <li className="nav-item dropdown">
                        <a role="button" data-toggle="dropdown" className="nav-link dropdown-toggle" data-target="#" href="/page.html">
                           Category
                        </a>
    		               <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
             
             
                           <li className="divider"></li>
                           <li className="dropdown-submenu">
                              {
                                 cate.map((item, index)=><span key={index}><a tabIndex="-1" href="#">{item.catename}</a>
                                    <ul className="dropdown-menu">
                                       
                                       {
                                          index==1 ? 
                                          <>
                                          <li><a href="#">Second level</a></li>
                                          <li><a href="#">Second level</a></li>
                                          </>
                                          :
                                          <li><a href="#">hello</a></li>

                                       }
                                    </ul>
                                    </span>
                                    )
                              }
                           </li>
                        </ul>
                     </li>

                        {/* Multi-Level DD End */}












                        
                       {/* <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label">Categories <span className="caret"></span></span></a>
                           <ul className="dropdown-menu">
                              {
                                 cate.map(item=><li><a href="about.html">{item.name}</a></li>)
                              }
                              
                              
                           </ul>
                        </li> */}
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/products">Products</NavLink>
                        </li>
                        
                        
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/mycart">
                              My Cart (0)
                           </NavLink>
                        </li>
                        {
                           localStorage.getItem("access-user")
                           ?
                           <IsLoggedIn />
                           :
                           <IsNotLoggedIn />
                        }
                        
                     </ul>
                  </div>
               </nav>
            </div>
         </header>