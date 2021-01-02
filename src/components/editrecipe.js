import React from "react";
// import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { PassThrouthLoading } from "react-loadingg";

class Editrecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      recipelabel:null,
      image:null,
      serves:null,
      calories:null,
      ingredients:null,
      instructions:null,
      publisher:null,
      Difficulty:null,
      Cost:null,
      onpotmeal:null,
      Occasion:null,
      taste:null,
      Meal:null,
      timetaken:null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  componentDidMount() {
    const id = localStorage.getItem("thisrecipeId");
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
  
    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }    
    submit() {
        console.warn(this.state)
    }

  render() {
    const { error, isLoaded, Thisrecipe  } = this.state;
    if (error) {
      return <div className="col text-center">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className="container-fluid text-center">
          <PassThrouthLoading />
        </div>
      );
    } else {
        const aterisk = <span className='asterisk'>*</span>
        let ingreds = Thisrecipe.result.ingredients
        let steps = Thisrecipe.result.instructions
        const ingredslist = ingreds.map((item) => {
          return (
            `- ${item}`
          );
        })
        const stepslist = steps.map((item,pos) => {
          return (
            `- ${item}`
          );
        })
        return (
            <div className="container bg-light card p-2 mt-2">
            <div className="row recipeHeader">
                <div className="col">
                    <h3>Publish Your Recipe</h3>
                </div>
                <div className="col home-button">
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
            <form className='publishform' onSubmit={handleSubmit(onSubmit)}>
                <div className='text-right small' style={{opacity:0.8}}>Fields marked with {aterisk} are mandatory.</div>
                <div className="p-1">
                    <div className='row'>
                        <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                            <label htmlFor="recipelabel">Recipe Name{aterisk}</label>
                            <input type="text" className="form-control" name="recipelabel"  />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                            <label htmlFor="Difficulty">Difficulty{aterisk}</label>
                            <select className="custom-select" name='Difficulty' >
                                <option defaultValue>select one</option>
                                <option value="easy">easy</option>
                                <option value="moderate">moderate</option>
                                <option value="difficult">difficult</option>
                            </select>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                            <label htmlFor="Cost">Cost{aterisk}</label>
                            <select className="custom-select" name='Cost' >
                                <option defaultValue>select one</option>
                                <option value="inexpensive">inexpensive</option>
                                <option value="moderate">moderate</option>
                                <option value="expensive">expensive</option>
                            </select>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                            <label htmlFor="onepotmeal">One Pot Meal{aterisk}</label>
                            <select className="custom-select" name='onepotmeal' >
                                <option defaultValue>select one</option>
                                <option value="yes">yes</option>
                                <option value="no">no</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6 form-group">
                            <label htmlFor="taste">Taste & Texture{aterisk}</label>
                            <input type="text" className="form-control" placeholder='buttery, salty, sweet' name="taste"  />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 form-group">
                            <label htmlFor="Occasion">Occasion{aterisk}</label>
                            <input type="text" className="form-control" name="Occasion" placeholder='Casual Dinner Party, Cooking for a date, game day'  />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6 form-group">
                            <label htmlFor="Meal">Meal{aterisk}</label>
                            <select className="custom-select" name='Meal' >
                                <option defaultValue>select one</option>
                                <option value="breakfast">breakfast</option>
                                <option value="lunch">lunch</option>
                                <option value="snacks">snacks</option>
                                <option value="dinner">dinner</option>
                            </select>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 form-group">
                            <label htmlFor="timetaken">Time taken{aterisk}</label>
                            <input type="text" className="form-control" name="timetaken" placeholder='1 hour'  />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6 form-group">
                            <label htmlFor="ingredients">ingredients{aterisk}</label>
                            <textarea type="text" className="form-control"
                                placeholder="include hyphen (-) between each ingredient. (example: Tomatos 5, Potatoes 2, Garam Masala ...)"
                                name="ingredients" row="3" ></textarea>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 form-group">
                            <label htmlFor="instructions">Preparation{aterisk}</label>
                            <textarea type="text"
                                placeholder="include hyphen (-) between each step. (example: - cut all the vegetables - In a small bowl combine sugar, ...)"
                                className="form-control" name="instructions" row="3" ></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                            <label className="form-label" htmlFor="image">
                                Image Url{aterisk}
                            </label>
                            <input type="text" className="form-control" name="image"  />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                            <label htmlFor="calories">Calories{aterisk}</label>
                            <input type="text" className="form-control" name="calories"  />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                            <label htmlFor="serves">Serves{aterisk}</label>
                            <input type="text" className="form-control" name="serves"  />
                        </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                        <label htmlFor="publisher">Publisher Name{aterisk}</label>
                        <input type="text" className="form-control" name="publisher"  />           
                    </div>            
                    </div>
                </div>
                <button name="publish__" type="submit" onClick={()=>this.submit()} className="btn m-0 submit-btn btn-block">
                        Publish
                </button>   
            </form>
        </div>
          );
    }
  }
}

export default Editrecipe;