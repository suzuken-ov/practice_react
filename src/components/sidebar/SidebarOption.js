import React from "react";
import "../sidebar/SidebarOption.css"

const SidebarOption=({text,Icon,active})=>{
    return(
        <div className={`sidebarOprion ${active && "sidebarOption--active"}`}>
            <Icon/>
            <h2>{text}</h2>
        </div>
    );
}
export default SidebarOption;