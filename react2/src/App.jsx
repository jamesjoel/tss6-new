import Footer from "./Components/Footer"
import Header from "./Components/Header"
import AllRoutes from "./Routes/AllRoutes"

const App = () => {
  return (
    <>
        <Header />
          <div className="container" style={{minHeight : "700px"}}>
            <AllRoutes />
          </div>
        <Footer />
    </>
  )
}

export default App
/*
  <img src="" />
*/