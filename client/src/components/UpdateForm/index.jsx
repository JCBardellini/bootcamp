import React, { useContext } from "react";
import { primaryContext } from "../../context/primaryContext";
import axios from "axios";

const UpdateForm = () => {
  const { states, campToEdit, setCampToEdit, camps } =
    useContext(primaryContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampToEdit((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(campToEdit);
    // let campWithFixedId =
    //   typeof campToEdit === "string"
    //     ? campToEdit
    //     : { ...campToEdit, stateId: campToEdit.stateId._id };
    let response = await axios({
      method: "PUT",
      url: `/server/camps/${campToEdit._id}`,
      // sometimes here stateId is a "string" and other times is an object
      data: campToEdit,
    });
    let newCamps = camps.map((camp) => {
      if (camp._id == campToEdit._id) {
        return response.data;
      } else {
        return camp;
      }
    });

    setCampToEdit(null);
    //update the frontend state as well
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="stateId">State:</label>
          <select
            id="stateId"
            name="stateId"
            value={campToEdit.stateId}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select a state
            </option>
            {states.map((state) => (
              <option key={state._id} value={state._id}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={campToEdit.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={campToEdit.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="img">Image URL:</label>
          <input
            type="text"
            id="img"
            name="img"
            value={campToEdit.img}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Bootcamp</button>
      </form>
    </div>
  );
};

export default UpdateForm;
