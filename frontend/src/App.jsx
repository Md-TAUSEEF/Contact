import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Home"; 
import Contact from "../Components/Pages/Contact";
import Service from "../Components/Pages/ServicePage";
import Login from "../Components/Pages/Login";
import Registor from "../Components/Pages/Register";
import Toggilemode from "../Components/Modes/lightmode";
import About from "../Components/Pages/About";
import "../src/App.css"
import Navbar from "../Components/Pages/Navbar";
import Error from "../Components/Pages/Error";
import Logout from "../Components/Pages/Logout";
import Adminlayout from "../Components/layout/Adminlayout";
import AdminUser from "../Components/layout/Adminuser";
import AdminContact from "../Components/layout/admin_contact";
import Footer from "../Components/Pages/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/about" element={<About/>}/>


        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Registor/>}/>
        <Route path="/toggile" element={<Toggilemode/>}/>
        <Route path="/logout" element={<Logout/>}/>

        <Route path="/admin" element={<Adminlayout/>}>
          <Route path="user" element={<AdminUser/>}/>
          <Route path="contact" element={<AdminContact/>}/>
        </Route>


//error page
<Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
