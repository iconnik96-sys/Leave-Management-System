import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Authentication/Login.jsx"
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
function App() {

    useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration
      once: true,      // whether animation should happen only once
    });
  }, []);
  return (
    <>
    <Login/>
      
     
    </>
  )
}

export default App
