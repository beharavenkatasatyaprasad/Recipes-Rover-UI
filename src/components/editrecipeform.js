import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { withRouter } from "react-router";
import "react-toastify/dist/ReactToastify.css";

class editrecipeform extends React.Component {
  constructor(props) {
    super(props);
    this.label = React.createRef();
    this.image = React.createRef();
    this.publisher = React.createRef();
    this.serves = React.createRef();
    this.calories = React.createRef();
    this.stepslist = React.createRef();
    this.ingredients = React.createRef();
    this.difficulty = React.createRef();
    this.cost = React.createRef();
    this.onepotmeal = React.createRef();
    this.occasion = React.createRef();
    this.tastetexture = React.createRef();
    this.meal = React.createRef();
    this.timetaken = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    if (
      !this.label.current.value ||
      !this.image.current.value ||
      !this.publisher.current.value ||
      !this.serves.current.value ||
      !this.calories.current.value ||
      !this.stepslist.current.value ||
      !this.ingredients.current.value ||
      !this.tastetexture.current.value ||
      !this.difficulty.current.value ||
      !this.cost.current.value ||
      !this.onepotmeal.current.value ||
      !this.occasion.current.value ||
      !this.meal.current.value ||
      !this.timetaken.current.value
    ) {
      toast.info("Fill all mandatory fields..", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      const id = this.props.match.params.id;
      const payload = {
        publisher: this.publisher.current.value,
        image: this.image.current.value,
        label: this.label.current.value,
        ingredients: this.ingredients.current.value,
        instructions: this.stepslist.current.value,
        calories: this.calories.current.value,
        serves: this.serves.current.value,
        difficulty: this.difficulty.current.value,
        cost: this.cost.current.value,
        onepotmeal: this.onepotmeal.current.value,
        occasion: this.occasion.current.value,
        tastetexture: this.occasion.current.value,
        meal: this.meal.current.value,
        timetaken: this.tastetexture.current.value,
      };
      updateRecipe(id, payload);
    }
  }
  render() {
    const aterisk = <span className="asterisk">*</span>;
    const recipelink = `/recipe/${this.props._id}`;
    return (
      <div>
        <div className="row recipeHeader">
          <div className="col">
            <h3>Edit Your Recipe</h3>
          </div>
          <div className="col home-button">
            <Link
              className="btn mx-1 btn-sm float-right btn-info"
              to={recipelink}
            >
              <i className="fa fa-arrow-left"></i> Go back
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
        <form className="publishform" onSubmit={this.handleSubmit}>
          <div className="text-right small" style={{ opacity: 0.8 }}>
            Fields marked with {aterisk} are mandatory.
          </div>
          <div className="p-1">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                <label htmlFor="recipelabel">Recipe Name{aterisk}</label>
                <input
                  type="text"
                  className="form-control"
                  name="recipelabel"
                  defaultValue={this.props.label}
                  disabled
                  ref={this.label}
                />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                <label htmlFor="Difficulty">Difficulty{aterisk}</label>
                <select
                  defaultValue={this.props.difficulty}
                  className="custom-select"
                  name="Difficulty"
                  ref={this.difficulty}
                >
                  <option defaultValue>select one</option>
                  <option value="easy">easy</option>
                  <option value="moderate">moderate</option>
                  <option value="difficult">difficult</option>
                </select>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                <label htmlFor="Cost">Cost{aterisk}</label>
                <select
                  defaultValue={this.props.cost}
                  className="custom-select"
                  name="Cost"
                  ref={this.cost}
                >
                  <option defaultValue>select one</option>
                  <option value="inexpensive">inexpensive</option>
                  <option value="moderate">moderate</option>
                  <option value="expensive">expensive</option>
                </select>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                <label htmlFor="onepotmeal">One Pot Meal{aterisk}</label>
                <select
                  defaultValue={this.props.onepotmeal}
                  className="custom-select"
                  name="onepotmeal"
                  ref={this.onepotmeal}
                >
                  <option defaultValue>select one</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 form-group">
                <label htmlFor="taste">Taste & Texture{aterisk}</label>
                <input
                  defaultValue={this.props.tastetexture}
                  type="text"
                  className="form-control"
                  placeholder="buttery, salty, sweet"
                  name="taste"
                  ref={this.tastetexture}
                />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 form-group">
                <label htmlFor="Occasion">Occasion{aterisk}</label>
                <input
                  defaultValue={this.props.occasion}
                  type="text"
                  className="form-control"
                  name="Occasion"
                  placeholder="Casual Dinner Party, Cooking for a date, game day"
                  ref={this.occasion}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 form-group">
                <label htmlFor="Meal">Meal{aterisk}</label>
                <select
                  defaultValue={this.props.meal}
                  className="custom-select"
                  name="Meal"
                  ref={this.meal}
                >
                  <option defaultValue>select one</option>
                  <option value="breakfast">breakfast</option>
                  <option value="snacks">snacks</option>
                  {/* <option value="6">lunch</option> */}
                  <option value="Lunch or Dinner">Lunch / Dinner</option>
                </select>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 form-group">
                <label htmlFor="timetaken">Time taken{aterisk}</label>
                <input
                  defaultValue={this.props.timetaken}
                  type="text"
                  className="form-control"
                  name="timetaken"
                  placeholder="1 hour"
                  ref={this.timetaken}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 form-group">
                <label htmlFor="ingredients">ingredients{aterisk}</label>
                <textarea
                  defaultValue={this.props.ingredslist}
                  type="text"
                  className="form-control"
                  placeholder="include hyphen (-) between each ingredient. (example: Tomatos 5, Potatoes 2, Garam Masala ...)"
                  name="ingredients"
                  row="3"
                  ref={this.ingredients}
                ></textarea>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 form-group">
                <label htmlFor="instructions">Preparation{aterisk}</label>
                <textarea
                  type="text"
                  defaultValue={this.props.stepslist}
                  placeholder="include hyphen (-) between each step. (example: - cut all the vegetables - In a small bowl combine sugar, ...)"
                  className="form-control"
                  name="instructions"
                  row="3"
                  ref={this.stepslist}
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                <label className="form-label" htmlFor="image">
                  Image Url{aterisk}
                </label>
                <input
                  defaultValue={this.props.image}
                  type="text"
                  className="form-control"
                  name="image"
                  ref={this.image}
                />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                <label htmlFor="calories">Calories{aterisk}</label>
                <input
                  defaultValue={this.props.calories}
                  type="text"
                  className="form-control"
                  name="calories"
                  ref={this.calories}
                />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                <label htmlFor="serves">Serves{aterisk}</label>
                <input
                  type="text"
                  defaultValue={this.props.serves}
                  className="form-control"
                  name="serves"
                  ref={this.serves}
                />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                <label htmlFor="publisher">Publisher Name{aterisk}</label>
                <input
                  type="text"
                  defaultValue={this.props.publisher}
                  className="form-control"
                  name="publisher"
                  disabled
                  ref={this.publisher}
                />
              </div>
            </div>
          </div>
          <button
            name="publish__"
            type="submit"
            className="btn m-0 submit-btn btn-block"
          >
            Update Changes
          </button>
        </form>
      </div>
    );
  }
}

async function updateRecipe(id, payload) {
  console.log(payload);

  let conn_status = true;
  toast.info("Please wait..", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
  });
  let data = await fetch(`https://recipesrover.herokuapp.com/update/${id}`, {
    // let data = await fetch(`http://localhost:5000/update/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) => {
    toast.danger(error);
    conn_status = false;
  });
  if (!conn_status) return;
  if (data.status !== 201) {
    toast.error("something went wrong, Please tryagain", {
      position: toast.POSITION.TOP_RIGHT,
    });
    return;
  }
  //   alert();
  toast.success("changes for " + payload.label + " were saved", {
    position: toast.POSITION.TOP_RIGHT,
  });
}

export default withRouter(editrecipeform);
