import React from "react";

function Form(props) {

  return (
    <form>
        <input
          type="text"
          value={props.firstName}
          onChange={props.handleFirstNameChange}
        />
<br />
<br />
        <input
          type="text"
          value={props.lastName}
          onChange={props.handleLastNameChange}
        />

        <br />
        <br />
        
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
