import React from "react";
import { Link } from "react-router-dom";
import Networkerror from "./networkerror";
import { PassThrouthLoading } from "react-loadingg";

const recipesData = (props) => {
  if (props.error) {
    return (
      <div className="container-fluid">
        <Networkerror />
      </div>
    );
  } else if (!props.isLoaded) {
    return (
      <div className="container-fluid text-center">
        <PassThrouthLoading />
      </div>
    );
  } else {
    const resArray = props.recipesArray;
    const cards = resArray.map((item) => {
      return (
        <div
          className="fade-in my-1 recipe-card col-sm-6 col-md-4 col-lg-3"
          key={item._id}
        >
          <div className="col-sm-12 recipe-data p-0">
            <div className="recipe-container col-sm-12 p-0 m-0">
              <div className="recipe-photo col-sm-12 p-0 m-0">
                <img src={item.image} alt={item._id} />
                <span>{item.label}</span>
              </div>
              <div className="knowMore col-sm-12 p-0">
                <Link
                  to={`/recipe/${item._id}`}
                  className="btn knowMore-btn btn-md btn-block"
                  type="button"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div
        className="container-fluid"
        style={{ paddingLeft: "25px", paddingRight: "25px" }}
      >
        <div className="row p-0 m-0 mt-3 editrecipe justify-content-center">
          {cards}
        </div>
      </div>
    );
  }
};

export default recipesData;
