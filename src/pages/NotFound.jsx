import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/29142-error-404.json";
class NotFound extends React.Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg align-self-center">
            <Lottie options={defaultOptions} height={650} width={650} />
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
