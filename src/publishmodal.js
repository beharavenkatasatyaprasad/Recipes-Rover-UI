import React from 'react';

function PublishModal(){
    return(
        <div className="modal fade" id="publish-modal" tab-index="-1" role="dialog" aria-labelledby="contact-update" ariaHidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Recipes Rover</h3>
              <button  type="button" style={{color: "white"}} className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form id="Update_Contact">
              <div className="modal-body">
                <div>
                  <div className="form-group">
                    <label for="contact-id">Recipe Label</label>
                    <input
                      type="text"
                      className="form-control"
                      id="contact-id"
                      readonly
                    />
                  </div>
                  <div className="form-group">
                    <label class="form-label" for="customFile">Image</label>
                    <input type="file" class="form-control" id="customFile" />
                  </div>
                  <div className="form-group">
                        <label for="update-address">Ingredients</label>
                        <textarea
                        type="text"
                        className="form-control"
                        placeholder="include comma (',') between each ingredient. (example: Tomatos 5, Potatoes 2, Garam Masala ...)"
                        id="update-address"
                        row="2"
                        ></textarea>
                  </div>
                  <div className="form-group">
                        <label for="update-address">Instructions</label>
                        <textarea
                        type="text"
                        placeholder="include comma (',') between each step. (example: cut all the vegetables, In a small bowl combine sugar, ...)"
                        className="form-control"
                        id="update-address"
                        row="2"
                        ></textarea>
                  </div>
                </div>
              </div>
            </form>
            <div className="modal-footer">
              <button
                id="update-btn"
                type="button"
                className="btn submit-btn btn-block"
                contactId=""
                onClick="update_contact(this)"
                data-dismiss="modal"
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default PublishModal;