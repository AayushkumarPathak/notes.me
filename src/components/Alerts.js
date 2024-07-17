import React from "react";

function Alerts(props) {
  return (
    <div>
      <div
        class="p-4 mb-4 text-sm text-black-800 rounded-lg bg-green-300  dark:text-blue-400"
        role="alert"
      >
        <span class="font-medium"></span> 
        {props.message}
      </div>
    </div>
  );
}

export default Alerts;
