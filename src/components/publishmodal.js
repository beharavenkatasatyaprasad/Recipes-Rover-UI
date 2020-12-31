import React from 'react';
import { useForm } from 'react-hook-form';

function PublishModal(){
  const { register, handleSubmit } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
    publish(data.recipelabel,data.image,data.calories,data.serves,data.ingredients,data.instructions,data.publisher)
  };
    return(
<div className="modal fade registermodal-modal-xl" id="publish-modal" tab-index="-1" role="dialog"
        aria-labelledby="register-modal" aria-hidden="true">
        <div className="modal-dialog modal-xl">
            <div className="modal-content bg-light">
                <div className="modal-header">
                    <h3 className="modal-title">Recipes Rover</h3>
                    <button type="button" style={{color: "white"}} className="close" data-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="modal-body">
                        <div>
                            <div className="form-group">
                                <label htmlFor="recipelabel">Recipe Label</label>
                                <input type="text" className="form-control" name="recipelabel" ref={register({ required:
                                    true })} />
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6 form-group">
                                    <label htmlFor="ingredients">ingredients</label>
                                    <textarea type="text" className="form-control"
                                        placeholder="include comma (',') between each ingredient. (example: Tomatos 5, Potatoes 2, Garam Masala ...)"
                                        name="ingredients" row="2" ref={register({ required: true })}></textarea>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 form-group">
                                    <label htmlFor="instructions">Instructions</label>
                                    <textarea type="text"
                                        placeholder="include comma (',') between each step. (example: cut all the vegetables, In a small bowl combine sugar, ...)"
                                        className="form-control" name="instructions" row="2" ref={register({ required:
                                        true })}></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                                    <label className="form-label" htmlFor="image">Image Url</label>
                                    <input type="text" className="form-control" name="image" ref={register({ required:
                                        true })} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                                    <label htmlFor="publisher">Publisher Name</label>
                                    <input type="text" className="form-control" name="publisher" ref={register({
                                        required: true })} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                                    <label htmlFor="calories">Calories</label>
                                    <input type="text" className="form-control" name="calories" ref={register({
                                        required: true })} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3 form-group">
                                    <label htmlFor="serves">Serves</label>
                                    <input type="text" className="form-control" name="serves" ref={register({ required:
                                        true })} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button name="publish__" type="submit" className="btn submit-btn btn-block">
                            Publish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}

async function publish(label,image,calories,serves,ingredients,instructions,publisher) {
    // publishButton.innerHTML = <SemipolarLoading />
    let formdata = {
        publisher: publisher,
        image: image,
        label: label,
        ingredients: ingredients,
        instructions: instructions,
        calories: calories,
        serves: serves
    }
    let conn_status = true
    let data = await fetch('http://localhost:5000/publish',{
        method: "POST",
        body: JSON.stringify(formdata),
        headers: {
            'Content-Type': 'application/json'
        }
      }).catch((error) => {
        alert("ERROR: Cannot connect to server");
        conn_status = false;
      });
      if (!conn_status) return;
      if (data.status !== 201) {
       alert("something went wrong, Please tryagain");
        return;
      }
    alert(label+" successfully published");
}

export default PublishModal;