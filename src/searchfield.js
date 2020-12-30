import React from 'react';

function searchField(){
    return(
        <div className="bg-img justify-content-center">
            <form>
                <div className="input-fields d-flex justify-content-center">
                    <div className="col-sm-8 col-lg-6">
                        <div className="input-container input-group">
                            <input type="text" className="form-control form-control-md" placeholder="Search for a Recipe" />
                            <button type="button" className="btn input-group-append search-btn btn-md btn-grad">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </form>
      </div>

    );
}

export default searchField;
