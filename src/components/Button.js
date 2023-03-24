import React from "react";

const Button = (props) => {

    
    
    return(

        <div>
        <button className="px-5 py-2 m-5 bg-gray-400 rounded-lg shadow" >{props.name}</button>
        </div>
        
    );
}


export default Button;