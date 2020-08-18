import React, { Component, Fragment } from "react";
import axios from "axios";
import Content from "../../component/Content/Content";
import Layout from "../../component/Layout/Layout";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      error: false,
      notification: 0,
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        console.log("my photos", res);
        this.setState({ photos: res.data.slice(0, 6), notification: 5 });
        console.log("checking", this.state.photos);
      })
      .catch((error) => {
        // console.log(error);
        this.setState({ error: true });
      });
  }
  componentDidUpdate() {}
  render() {
    return (
      <Fragment>
          <Content
            photos={this.state.photos}
            error={this.state.error}
            notification={this.state.notification}
          />
      </Fragment>
    );
  }
}
export default Layout(Home);
