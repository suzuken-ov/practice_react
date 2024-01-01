import React from "react";
import "../sidebar/SidebarOption.css"

const SidebarOption=({text,Icon})=>{
    return(
        <div className="sidebarOprion">
            <Icon/>
            <h2>{text}</h2>
        </div>
    );
}
export default SidebarOption;