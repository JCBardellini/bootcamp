import React, { useContext } from "react";
import "./index.css";
import { primaryContext } from "../../context/primaryContext";
import axios from "axios";
import UpdateForm from "../../components/UpdateForm";

const CampsDisplay = () => {
  const { camps, setCamps, setCampToEdit, campToEdit } =
    useContext(primaryContext);

  const handleDelete = (id) => {
    try {
      axios({
        method: "DELETE",
        url: `/server/camps/${id}`,
      }).then(() => {
        // just like when we create on the DB, and add it the frontend state
        // when we delete from db, we need to remove from the frontend state
        let newCamps = camps.filter((camp) => {
          return camp._id !== id;
        });
        // newCamps is all camps except for the deleted one
        setCamps(newCamps);
      });
    } catch (err) {}
  };
  // console.log(camps);
  return (
    <div>
      {campToEdit && <UpdateForm />}

      {camps.map((camp) => {
        return (
          <div key={camp._id} className="card">
            <h2>{camp.name}</h2>
            <p>{camp.stateId.name}</p>
            <p>{camp.price}</p>
            <p>Price after tax: {camp.price * (1 + +camp.stateId.tax)}</p>
            <button onClick={() => setCampToEdit(camp)}>Edit</button>
            <button onClick={() => handleDelete(camp._id)}>Delete</button>
            <button>Join</button>
          </div>
        );
      })}
    </div>
  );
};

export default CampsDisplay;
