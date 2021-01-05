import React from "react";
import inprogress from "../inprogress.svg";
import { Link } from "react-router-dom";

function editrecipe() {
  return (
    <div
      className="container bg-light col-sm-8 p-0"
      style={{ marginTop: "11rem" }}
    >
      <div className="card">
        <div className="recipeHeader editrecipe"></div>
        <div className="row">
          <div className="col-sm-10 pt-1 mt-3 mb-2 text-center col-md-6 col-lg-6 side-content">
            <h3 style={{ paddingTop: "20%", paddingBottom: "20%" }}>
              Edit Component is under construction..
            </h3>
            <Link className="btn mx-1 btn-sm m-2 btn-info" to="/">
              <i className="fa fa-arrow-left"></i> Back to Home
            </Link>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 side-content-img">
            <img src={inprogress} className="img-responsive" alt="Ima" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default editrecipe;
