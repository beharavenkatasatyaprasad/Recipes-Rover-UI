import React from 'react';

function searchField(){
    return(
        <div className="bg-img justify-content-center">
            <form>
                <div className="input-fields">
                    <div className="input-container input-group d-flex justify-content-center">
                            <input type="text" className="form-control form-control-lg col-sm-12 col-lg-6"
                                placeholder="Search for a Recipe" />
                        <button type="button" className="btn input-group-append search-btn btn-lg btn-grad">
                            Search
                        </button>
                    </div>
                </div>
            </form>
      </div>

    );
}

export default searchField;
