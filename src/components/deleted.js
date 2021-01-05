import React from "react";
import deleteimg from "../deletepic.svg";
import { Link } from "react-router-dom";
import { PassThrouthLoading } from "react-loadingg";
import { withRouter } from "react-router";

class deleterecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`https://recipesrover.herokuapp.com/delete/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    }).then(
      (result) => {
        this.setState({
          isLoaded: true,
          Thisrecipe: result,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div className="col text-center">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className="container-fluid text-center">
          <PassThrouthLoading />
        </div>
      );
    } else {
      const recipename = localStorage.getItem("thisrecipeName");
      return (
        <>
          <div
            className="container bg-light col-sm-8 p-0"
            style={{ marginTop: "11rem" }}
          >
            <div className="card">
              <div className="recipeHeader">
                <Link
                  className="btn mx-1 btn-sm m-2 float-right btn-info"
                  to="/"
                >
                  <i className="fa fa-arrow-left"></i> Back to Home
                </Link>
              </div>
              <div className="row">
                <div className="col-sm-10 pt-1 mt-3 mb-2 text-center col-md-6 col-lg-6 side-content">
                  <h3 style={{ padding: "10%" }}>
                    <span style={{ fontFamily: "Redressed", fontSize: "160%" }}>
                      {recipename}
                    </span>
                    <br />
                    successfully deleted..
                  </h3>
                </div>
                <div className="col-sm-12 my-2 col-md-6 col-lg-6 side-content-img">
                  <img src={deleteimg} className="img-responsive" alt="Ima" />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default withRouter(deleterecipe);
