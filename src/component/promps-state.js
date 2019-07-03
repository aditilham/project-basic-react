import React from "react";

class DisplayInformation extends React.Component {
  render(){
    console.log("this is a props", this.props);
    return (
      <div>
        <p>
          {this.props.command}
        </p>
      </div>
    )
  }
}

export default DisplayInformation