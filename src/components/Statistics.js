import React from "react";
import StatLine from "./StatLine";

const Statistics = (props) => {
  return (
    <table>
        <tbody>
          <StatLine text="good:" value={props.good} />
          <StatLine text="neutral:" value={props.neutral} />
          <StatLine text="bad:" value={props.bad} />
          <StatLine text="all:" value={props.allStats} />
          <StatLine text="avg:" value={props.allStats / 3} />
          <StatLine text="positive:" value={`${(props.good / props.allStats) * 100}%`} />
        </tbody>
    </table>
  )
}

export default Statistics