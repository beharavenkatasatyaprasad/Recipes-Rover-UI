import React from "react";
import { withRouter } from "react-router";
import { PassThrouthLoading } from "react-loadingg";
import { Link } from "react-router-dom";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      recipes: [],
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`https://recipesrover.herokuapp.com/recipes/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            Thisrecipe: result,
          });
        },
        // error handler
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, Thisrecipe } = this.state;
    if (error) {
      return <div className="col text-center">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className="container-fluid text-center">
          <PassThrouthLoading />
        </div>
      );
    } else {
      localStorage.setItem("thisrecipeName", Thisrecipe.result.label);
      let ingreds = Thisrecipe.result.ingredients;
      let steps = Thisrecipe.result.instructions;
      const ingredslist = ingreds.map((item, pos) => {
        return <li key={pos}>{item}</li>;
      });
      const stepslist = steps.map((item, pos) => {
        return <li key={pos}>{item}</li>;
      });
      const recipeid = this.props.match.params.id;
      const editendpoint = "/editrecipe/" + recipeid;
      const deleteendpoint = "/deleterecipe/" + recipeid;
      return (
        <>
          <div
            className="container bg-light card p-2"
            style={{ marginTop: "4.5rem" }}
          >
            <div className="row recipeHeader">
              <div className="col">
                <h3>{Thisrecipe.result.label}</h3>
              </div>
              <div className="col home-button">
                <Link
                  to={deleteendpoint}
                  className="btn mx-1 btn-sm float-right btn-info"
                >
                  <i className="fa fa-trash"></i>
                </Link>
                <Link
                  className="btn mx-1 btn-sm float-right btn-info"
                  to={editendpoint}
                >
                  <i className="fa fa-edit"></i>
                </Link>
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
                  <span>Serves</span>: {Thisrecipe.result.serves}
                </p>
                <p>
                  <span>Calories</span>: {Thisrecipe.result.calories}
                </p>
                <p>
                  <span>Cost</span>: {Thisrecipe.result.cost}
                </p>
                <p>
                  <span>Difficulty</span>: {Thisrecipe.result.difficulty}
                </p>
                <p>
                  <span>Total Time</span>: {Thisrecipe.result.timetaken}
                </p>
                <p>
                  <span>One Pot Meal</span>: {Thisrecipe.result.onepotmeal}
                </p>
                <p>
                  <span>Occasion</span>: {Thisrecipe.result.occasion}
                </p>
                <p>
                  <span>Meal</span>: {Thisrecipe.result.meal}
                </p>
                <p>
                  <span>Taste and Texture</span>:{" "}
                  {Thisrecipe.result.tastetexture}
                </p>
              </div>
              <div className="col-sm-12 my-2 col-md-6 col-lg-6 side-content-img">
                <img
                  src={Thisrecipe.result.image}
                  className="img-responsive"
                  alt="Ima"
                />
              </div>
            </div>
            <div className="ingredients-div my-2">
              <h5 className="header">Ingredients</h5>
              <div className="card p-2 ingredients">
                <ol>{ingredslist}</ol>
              </div>
            </div>
            <div className="prep-div my-2">
              <h5 className="header">Preparation</h5>
              <div className="card p-2 preparation">
                <ol>{stepslist}</ol>
              </div>
            </div>
            <span className="text-right">
              <small>
                Published by :{" "}
                <span className="header">{Thisrecipe.result.publisher}</span>
              </small>
            </span>
          </div>
        </>
      );
    }
  }
}

export default withRouter(Recipe);
