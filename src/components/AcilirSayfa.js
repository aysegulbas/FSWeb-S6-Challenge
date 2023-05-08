import { useState } from "react";


function AcilirSayfa({title,children}){
    const [isOpen,setIsOpen]=useState(false);
    return(
        <div className="acilirSayfa">
        <div className="acilirSayfa_baslik" onClick={()=>setIsOpen(!isOpen)}>
            {title}
            </div>
        {isOpen && <div className="acilirSayfa_icerik">{children}</div>}
        </div>
    )

}

export default AcilirSayfa;