import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    const { score, name, doScore } = this.props;
    const disabled = score != undefined; //if score is not undefined disable this true

    return (
      <tr
        className={`RuleRow RuleRow-${disabled ? "disabled" : "active"}`}
        /*if clicked to figure out score then disable*/
        onClick={disabled ? null : doScore}
      >
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{score}</td>
      </tr>
    );
  }
}

export default RuleRow;
