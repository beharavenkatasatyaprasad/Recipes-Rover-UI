import React from 'react';

function publishbtn(){
    return(
        <button type="button"  id='publishModal_button' data-toggle="modal" data-target="#publish-modal" className="btn input-group-append publish-btn btn-md">Publish A Recipe</button>
    );
}

export default publishbtn;