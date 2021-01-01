import React from "react";
import { Link } from "react-router-dom";

const Recipe = () => {
  return (
    <>
      <div className="container bg-light card p-2 my-4">
        <div className="row recipeHeader">
          <div className="col">
            <h3>Dum Biryani</h3>
          </div>
          <div className="col home-button">
            <button className="btn mx-1 btn-sm float-right btn-info" to="/">
              <i class="fa fa-trash"></i>
            </button>
            <button className="btn mx-1 btn-sm float-right btn-info" to="/">
              <i class="fa fa-edit"></i>
            </button>
            <Link className="btn mx-1 btn-sm float-right btn-info" to="/">
              <i className="fa fa-arrow-left"></i> Back to Home
            </Link>
          </div>
        </div>
        <hr
          style={{
            height: "1.5px",
            borderWidth: 0,
            color: "gray",
            backgroundColor: "gray",
            padding: "0px",
            margin: "0px",
          }}
        />
        <div className="row">
          <div className="col-sm-12 my-2 col-md-6 col-lg-6 side-content">
            <p>
              <span>Serves</span>: 4
            </p>
            <p>
              <span>Calories</span>: 278
            </p>
            <p>
              <span>Cost</span>: Moderate
            </p>
            <p>
              <span>Difficulty</span>: Moderate
            </p>
            <p>
              <span>Total Time</span>: under 2 hours
            </p>
            <p>
              <span>One Pot Meal</span>: Yes
            </p>
            <p>
              <span>Occasion</span>: Casual Dinner Party, Cooking for a date,
              game day
            </p>
            <p>
              <span>Meal</span>: dinner
            </p>
            <p>
              <span>Taste and Texture</span>: buttery, salty, sweet
            </p>
          </div>
          <div className="col-sm-12 my-2 col-md-6 col-lg-6 side-content-img">
            <img
              src="https://irepo.primecp.com/2016/03/269699/recipe-24953_Large600_ID-1530361.jpg?v=1530361"
              class="img-responsive"
              alt="Ima"
            />
          </div>
        </div>
        <div className="ingredients-div my-2">
          <h5 className='header'>Ingredients</h5>
          <div className="card p-2 ingredients">
            <ol>
              <li> ½ cup butter</li>
              <li>30 large marshmallows</li>
              <li>1 ½ teaspoons green food coloring</li>
              <li>1 teaspoon vanilla extract</li>
              <li>4 cups cornflakes cereal</li>
              <li>2 tablespoons cinnamon red hot candies </li>
            </ol>
          </div>
        </div>
        <div className="prep-div my-2">
        <h5 className='header'>Preparation</h5>
        <div className="card p-2 preparation">
          <ol>
              <li> Melt butter in a large saucepan over low heat. Add marshmallows, and cook until melted, stirring constantly. Remove from heat, and stir in the food coloring, vanilla, and cornflakes.</li>
              <li>Quickly drop heaping tablespoonfuls of the mixture onto waxed paper, and form into a wreath shape with lightly greased fingers. Immediately decorate with red hot candies. Allow to cool to room temperature before removing from waxed paper, and storing in an airtight container.</li>
            </ol>
        </div>
        </div>
          <span className="text-right"><small>Published by : Satya Prasad Behara</small></span>
      </div>
    </>
  );
};

export default Recipe;
