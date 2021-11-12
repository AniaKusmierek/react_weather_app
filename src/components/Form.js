import React from "react";

const Form = (props) => {
  return (
    <>
      <form onSubmit={props.submit}>
        <input
          type="text"
          placeholder="Type searching city..."
          value={props.value}
          onChange={props.change}
        />
        <button>Search</button>
      </form>
    </>
  );
};

export default Form;
