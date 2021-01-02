import React from "react";
import { Link } from "react-router-dom";

function deletebtn(){
    return(
        <Link to={`/deleteRecipe`} className="btn mx-1 btn-sm float-right btn-info">
            <i className="fa fa-trash"></i>
        </Link>
    );
    
}

export default deletebtn