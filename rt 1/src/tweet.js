import React from "react";
import "./App.css";
// function tweet({ name, message }) {
//   return (
//     <div className="tweet">
//       <h3>{name}</h3>
//       <p>{message}</p>
//       <h3>Number of likes</h3>
//     </div>
//   );
// }

// export default tweet;

class Tweet extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "tweet" },
      React.createElement("h3", {}, this.props.name),
      React.createElement("p", {}, "Name", this.props.message)
    );
  }
}

export default Tweet;
