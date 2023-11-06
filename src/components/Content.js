import React from "react";
import "./content.css";

function Content(props) {
  if (props.title) {
    return <div className="content">{props.title}</div>;
  }
  return (
    <div className="content">
      That's all the jokes for today! Come back another day!
    </div>
  );
}

export default Content;
