import React from "react";
import Fragment_Child from "./Fragment_Child";

function Fragment_Parent() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <Fragment_Child name='Peter'/>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Fragment_Parent;
