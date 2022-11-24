import React from "react";

const StatLine = (props) => {
    return (
      <tr>
      <th>{props.text}</th>
      <td>{props.value}</td>
      </tr>
  )
}

export default StatLine