// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Contact } from './components/Contact'
import { Route, Routes } from "react-router";
// const [loading, setLoading] = useState(true);
import './App.css'
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Serveies from "./pages/Serveies";
import Aboutus from "./pages/Aboutus";
import Careers from "./pages/Careers";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      {/* {loading ? ( */}
        {/* // <div> */}
          {/* <span className="loader"></span> */}
        {/* </div> */}
      {/* // ) : ( */}
        <Routes>
          <Route
            path="/"
            element = {<Home/>}
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Services" element={<Serveies />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/Careers" element={<Careers />} />
        </Routes>
      {/* )} */}
    </div>
  )
}

export default App