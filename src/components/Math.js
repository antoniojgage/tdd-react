import React from "react";

function Math(props) {
  let result;
  if (props.operator === "+") {
    result = props.num1 + props.num2;
  } else if (props.operator === "-") {
    result = props.num1 - props.num2;
  }
  return <span>{result}</span>;
}

export default Math;
