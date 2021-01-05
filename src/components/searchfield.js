import React from "react";

class searchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Query: "",
    };
  }
  handleQueryChange = (e) => {
    this.setState({ Query: e.target.value });
  };
  handleSearch = () => {
    localStorage.setItem("query", this.state.Query);
  };
  render() {
    return (
      <div
        className="bg-img justify-content-center"
        style={{ marginTop: "4rem" }}
      >
        <form>
          <div className="input-fields d-flex justify-content-center">
            <div className="col-sm-8 col-lg-6">
              <div className="input-container input-group">
                <input
                  type="text"
                  onChange={this.handleQueryChange}
                  name="Query"
                  value={this.state.Query}
                  className="form-control form-control-lg"
                  placeholder="Search for a Recipe"
                />
                <button
                  type="button"
                  onClick={this.handleSearch}
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
