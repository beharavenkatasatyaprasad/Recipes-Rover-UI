import React from "react";
import Recipesdata from "./recipesData";

class recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      recipes: [],
      Query: "",
    };
  }
  handleQueryChange = (e) => {
    this.setState({ Query: e.target.value });
  };
  handleSearch = () => {
    console.log(this.state.Query);
  };
  componentDidMount() {
    fetch("https://recipesrover.herokuapp.com/recipes")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            recipes: result,
          });
        },
        // error handler
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, recipes } = this.state;
    const recipesArray = recipes.result;
    return (
      <div>
        <Recipesdata
          error={error}
          isLoaded={isLoaded}
          recipesArray={recipesArray}
        />
      </div>
    );
  }
}

export default recipe;
