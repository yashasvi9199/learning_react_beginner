import React, { useState } from "react";
import "./StyleSheet.css";
import FormAction_Class from "./FormAction_Class";

function FormAction_Function(props) {
  //Using useState to get 'state' in functional component
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [language, setLanguage] = useState("");
  const [hidden, setHidden] = useState(props.hidden);

  function changeName(e) {
    setName(e.target.value);
  }

  function changeComment(e) {
    setComment(e.target.value);
  }

  function changeLanguage(e) {
    setLanguage(e.target.value);
  }

  function resetName() {
    setName("");
    setComment("");
    setLanguage("");
  }

  function formSubmit(e) {
    alert(`Hello ${name} \nComments : ${comment} \nLanguage : ${language}`);
    e.preventDefault();
  }


  return (
    <form onSubmit={formSubmit} hidden={props.hidden}>
      <table text-align="left">
        <tr>
          <td>
            <label>Enter Name : </label>
          </td>
          <td>
            <input type="text" value={name} />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            This will not work. Try next one
            {/* The reason it does not work is because we are setting the value (which is blank) but there is not way to change the value user enters */}
          </td>
        </tr>
        <tr>
          <td>
            <label>Enter Name : </label>
          </td>
          <td>
            <input type="text" value={name} onChange={changeName} />
          </td>
        </tr>
        <tr>
          <td>
            <label>Enter your Comments</label>
          </td>
          <td>
            <input type="textArea" value={comment} onChange={changeComment} />
          </td>
        </tr>
        <tr>
          <td>
            <label>Select Language</label>
          </td>
          <td>
            <select value={language} onChange={changeLanguage}>
              <option value="">Select Language</option>
              <option value="react">React</option>
              <option value="node">Node.js</option>
              <option value="java">JAVA</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <button type="reset" onClick={resetName}>
              reset
            </button>
          </td>
          <td>
            <button type="submit">Submit</button>
          </td>
        </tr>
      </table>
    </form>
  );
}

export default FormAction_Function;
