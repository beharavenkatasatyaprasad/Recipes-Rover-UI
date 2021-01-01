import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Publish() {
  const aterisk = <span className='asterisk'>*</span>
  const { register, handleSubmit } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    publish(
      data.recipelabel,
      data.image,
      data.calories,
      data.serves,
      data.ingredients,
      data.instructions,
      data.publisher
    );
  };
  return (
    <div className="container bg-light card p-2 my-4">
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
                    <input type="text" className="form-control" name="recipelabel" ref={register({ required: true
                        })} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                    <label htmlFor="Difficulty">Difficulty{aterisk}</label>
                    <select class="custom-select" name='Difficulty' ref={register({ required: true })}>
                        <option selected>select one</option>
                        <option value="easy">easy</option>
                        <option value="moderate">moderate</option>
                        <option value="difficult">difficult</option>
                    </select>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                    <label htmlFor="Cost">Cost{aterisk}</label>
                    <select class="custom-select" name='Difficulty' ref={register({ required: true })}>
                        <option selected>select one</option>
                        <option value="easy">easy</option>
                        <option value="moderate">moderate</option>
                        <option value="difficult">difficult</option>
                    </select>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                    <label htmlFor="onepotmeal">One Pot Meal{aterisk}</label>
                    <select class="custom-select" name='onepotmeal' ref={register({ required: true })}>
                        <option selected>select one</option>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 form-group">
                    <label htmlFor="taste">Taste & Texture{aterisk}</label>
                    <input type="text" className="form-control" placeholder='buttery, salty, sweet' name="taste" ref={register({ required: true })} />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 form-group">
                    <label htmlFor="Occasion">Occasion{aterisk}</label>
                    <input type="text" className="form-control" name="Occasion" placeholder='Casual Dinner Party, Cooking for a date, game day' ref={register({ required: true })} />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 form-group">
                    <label htmlFor="Meal">Meal{aterisk}</label>
                    <select class="custom-select" name='Meal' ref={register({ required: true })}>
                        <option selected>select one</option>
                        <option value="breakfast">breakfast</option>
                        <option value="lunch">lunch</option>
                        <option value="snacks">snacks</option>
                        <option value="dinner">dinner</option>
                    </select>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 form-group">
                    <label htmlFor="timetaken">Time taken{aterisk}</label>
                    <input type="text" className="form-control" name="timetaken" placeholder='1 hour' ref={register({ required: true })} />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 form-group">
                    <label htmlFor="ingredients">ingredients{aterisk}</label>
                    <textarea type="text" className="form-control"
                        placeholder="include comma (',') between each ingredient. (example: Tomatos 5, Potatoes 2, Garam Masala ...)"
                        name="ingredients" row="3" ref={register({ required: true })}></textarea>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 form-group">
                    <label htmlFor="instructions">Preparation{aterisk}</label>
                    <textarea type="text"
                        placeholder="include comma (',') between each step. (example: cut all the vegetables, In a small bowl combine sugar, ...)"
                        className="form-control" name="instructions" row="3" ref={register({ required: true
                        })}></textarea>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                    <label className="form-label" htmlFor="image">
                        Image Url{aterisk}
                    </label>
                    <input type="text" className="form-control" name="image" ref={register({ required: true })} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                    <label htmlFor="calories">Calories{aterisk}</label>
                    <input type="text" className="form-control" name="calories" ref={register({ required: true,
                        })} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                    <label htmlFor="serves">Serves{aterisk}</label>
                    <input type="text" className="form-control" name="serves" ref={register({ required: true })} />
                </div>
            <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                <label htmlFor="publisher">Publisher Name{aterisk}</label>
                <input type="text" className="form-control" name="publisher" ref={register({ required: true,})} />           
            </div>            
            </div>
        </div>
        <div className="modal-footer">
            <button name="publish__" type="submit" className="btn m-0 submit-btn btn-block">
                Publish
            </button>
        </div>
    </form>
</div>
  );
}

async function publish(
  label,
  image,
  calories,
  serves,
  ingredients,
  instructions,
  publisher
) {
  let formdata = {
    publisher: publisher,
    image: image,
    label: label,
    ingredients: ingredients,
    instructions: instructions,
    calories: calories,
    serves: serves,
  };
  let conn_status = true;
  let data = await fetch("http://localhost:5000/publish", {
    method: "POST",
    body: JSON.stringify(formdata),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) => {
    alert(error);
    conn_status = false;
  });
  if (!conn_status) return;
  if (data.status !== 201) {
    alert("something went wrong, Please tryagain");
    return;
  }
  alert(label + " successfully published");
}

export default Publish;
