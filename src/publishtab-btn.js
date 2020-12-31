import React from 'react';

function publishbtn(){
    return(
        <button type="button" key={'publishBtn'} data-toggle="modal" data-target=".registermodal-modal-xl" className="btn input-group-append publish-btn btn-md">Publish A Recipe</button>
    );
}

export default publishbtn;