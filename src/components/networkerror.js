import React from "react";
import networkerrorimg from "../networkerror.svg";

function Networkerror() {
  return (
    <div className="container bg-light col-sm-8 p-0 mt-2">
      <div className="card">
        <div className="recipeHeader editrecipe"></div>
        <div className="row">
          <div className="col-sm-10 pt-1 mt-3 mb-2 text-center col-md-6 col-lg-6 side-content">
            <h3 style={{ paddingTop: "20%", paddingBottom: "20%" }}>
              Please check Your connection..
            </h3>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 side-content-img">
            <img src={networkerrorimg} className="img-responsive" alt="Ima" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Networkerror;
