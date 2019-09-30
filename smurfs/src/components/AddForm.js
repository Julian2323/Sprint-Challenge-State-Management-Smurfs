import React from "react";

const AddForm = ({ state, addSmurf, updateNewSmurf }) => {
  return (
    <form className="add-form">
      <input
        className="add-field"
        type="text"
        name="name"
        placeholder="Smurf name"
        value={state.newSmurf.name}
        onChange={e =>
          updateNewSmurf({ ...state.newSmurf, [e.target.name]: e.target.value })
        }
      />
      <input
        className="add-field"
        type="text"
        name="age"
        placeholder="Smurf age"
        value={state.newSmurf.age}
        onChange={e =>
          updateNewSmurf({ ...state.newSmurf, [e.target.name]: e.target.value })
        }
      />
      <input
        className="add-field"
        type="text"
        name="height"
        placeholder="Smurf height"
        value={state.newSmurf.height}
        onChange={e =>
          updateNewSmurf({ ...state.newSmurf, [e.target.name]: e.target.value })
        }
      />
      <button onClick={(e, n) => addSmurf(e, state.newSmurf)}>
        Submit
      </button>
    </form>
  );
};

export default AddForm;