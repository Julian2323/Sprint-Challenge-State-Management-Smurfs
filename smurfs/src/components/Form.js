import React from "react";

const Form = ({ query, getSmurfs }) => {
  return (
    <form action="">
      <button onClick={(e, q) => getSmurfs(e, query)}>SEE SMURFS</button>
    </form>
  );
};

export default Form;