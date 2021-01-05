import React from "react";
import { Link } from "react-router-dom";

function publishbtn() {
  return (
    <Link
      type="button"
      to="/publish"
      data-target=".registermodal-modal-xl"
      className="btn input-group-append publish-btn btn-md"
    >
      Publish A Recipe
    </Link>
  );
}

export default publishbtn;
