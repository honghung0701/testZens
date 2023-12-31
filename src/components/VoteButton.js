import React from "react";

function VoteButton(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.title}
    </button>
  );
}

export default VoteButton;
