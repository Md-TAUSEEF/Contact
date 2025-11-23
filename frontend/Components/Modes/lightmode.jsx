import { useState } from "react"

import { FaSun, FaMoon } from "react-icons/fa";

function Toggilemode(){
    const[darkmode,SetDarkmode]=useState(false);
    const toggile=()=>{
        SetDarkmode(!darkmode);
        document.body.classList.toggle("dark");//is there is using css beacause i am using class name;
    };
    return(
        <>
           
                <button onClick={toggile} style={{fontSize:"24px",cursor:"pointer"}}>
                {
                    darkmode ? <FaSun/>:<FaMoon/>
                    
                }
                </button>
            
        </>
    )
}

export default Toggilemode;