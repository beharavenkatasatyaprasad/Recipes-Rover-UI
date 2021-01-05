import React from "react";
import { withRouter } from "react-router";
import Editrecipeform from "./editrecipeform";

import { PassThrouthLoading } from "react-loadingg";

class Editrecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      id: "",
      Thisrecipe: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({
      id: id,
    });
    fetch(`https://recipesrover.herokuapp.com/recipes/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            Thisrecipe: result,
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

  handleInputChange(event) {
    const target = event.target;
    var value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  submit() {
    console.warn(this.state);
  }

  render() {
    const { error, isLoaded, Thisrecipe } = this.state;
    if (error) {
      return <div className="col text-center">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className="container-fluid text-center">
          <PassThrouthLoading />
        </div>
      );
    } else {
      let ingreds = Thisrecipe.result.ingredients.join("-");
      let steps = Thisrecipe.result.instructions.join("-");
      const ingredslist = "-" + ingreds;
      const stepslist = "-" + steps;
      return (
        <div
          className="container bg-light card p-2"
          style={{ marginTop: "4.5rem" }}
        >
          <Editrecipeform
            label={Thisrecipe.result.label}
            calories={Thisrecipe.result.calories}
            cost={Thisrecipe.result.cost}
            difficulty={Thisrecipe.result.difficulty}
            ingredslist={ingredslist}
            stepslist={stepslist}
            timetaken={Thisrecipe.result.timetaken}
            onepotmeal={Thisrecipe.result.onepotmeal}
            occasion={Thisrecipe.result.occasion}
            meal={Thisrecipe.result.meal}
            tastetexture={Thisrecipe.result.tastetexture}
            serves={Thisrecipe.result.serves}
            image={Thisrecipe.result.image}
            publisher={Thisrecipe.result.publisher}
            _id={Thisrecipe.result._id}
          />
        </div>
      );
    }
  }
}

export default withRouter(Editrecipe);
