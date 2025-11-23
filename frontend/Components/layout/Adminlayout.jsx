import { NavLink, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { MdHomeRepairService } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import "./Adminlayout.css"

function Adminlayout(){
    return(
        <>
          <div className="admin_nav">
            <ul>
                <li><NavLink to="/admin/user"><FaUser/>User</NavLink></li>
                <li><NavLink to="/admin/contact"><MdContactMail/>Contact</NavLink></li>
                <li><NavLink to="/service"><MdHomeRepairService/>Service</NavLink></li>
                <li><NavLink to="/"><IoHomeSharp/>Home</NavLink></li>
            </ul>
          </div>
          <Outlet/>
        </>
    )
} 
export default Adminlayout;