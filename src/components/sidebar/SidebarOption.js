import React from "react";

const SidebarOption=({text,Icon})=>{
    return(
        <div className="sidebar">
            <Icon/>
            <h2>{text}</h2>
        </div>
    );
}
export default SidebarOption;