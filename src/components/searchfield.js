import React from "react";

class searchField extends React.Component{
    constructor(props) {
      super(props);
      this.query = React.createRef();
  }
  handleSubmit(e) {
    e.preventDefault();
    const query = this.query.current.value;
    if(query){
      resArr = this.props.recipesArray;
      resArr.forEach(name => {
      if (name.innerText.toLowerCase().includes(query.toLowerCase())) {
        console.log(name)
      } else {
        console.log(name)
      }   
      })
    }}
  render(){
    return (
      <div className="bg-img justify-content-center" style={{marginTop:'4rem'}}>
        <form onSubmit={this.handleSubmit}>
          <div className="input-fields d-flex justify-content-center">
            <div className="col-sm-8 col-lg-6">
              <div className="input-container input-group">
                <input
                  type="text"
                  id="searchQuery"
                  defaultValue='' 
                  ref={this.query}
                  className="form-control form-control-lg"
                  placeholder="Search for a Recipe"
                />
                <button
                  type="button"
                  id="SearchBtn"
                  className="btn input-group-append search-btn btn-lg btn-grad"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
  
}

export default searchField;
