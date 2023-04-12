import { MenuItem } from "../../../model/index";
import React, { useState } from "react";
// import "./EmployeeForm.style.css";

interface Props {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: MenuItem) => void;
}

const AddEmployee: React.FC<Props> = ({
  onBackBtnClickHnd,
  onSubmitClickHnd,
}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState(0);
  const [ingredients, setingredients] = useState("");

  const onSubmitBtnClickHnd = (e: any) => {
    console.log("data");
    e.preventDefault();
    const data: MenuItem = {
      id: new Date().toJSON().toString(),
      name: name,
      price: price,
      description: description,
      calories: calories,
      ingredients: ingredients,
    };
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container">
      <div>
        <h3>Add Menu</h3>
      </div>
      <form className="" onSubmit={onSubmitBtnClickHnd}>
        <div className="d-flex justify-content-center">
          <div className="text-start">
            <div className="col">
              <label htmlFor="name" className="form-label fw-semibold">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="form-control rounded-0"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="col">
              <label htmlFor="price" className="form-label fw-semibold">
                Price
              </label>
              <input
                id="price"
                type="text"
                className="form-control rounded-0"
                placeholder="Name"
                value={price}
                onChange={(event) => setPrice(parseInt(event.target.value))}
              />
            </div>
            <div className="col">
              <label htmlFor="calories" className="form-label fw-semibold">
                Calories
              </label>
              <input
                id="calories"
                type="text"
                className="form-control rounded-0"
                placeholder="Name"
                value={calories}
                onChange={(event) => setCalories(parseInt(event.target.value))}
              />
            </div>
            <div className="col">
              <label htmlFor="ingredients" className="form-label fw-semibold">
                ingredients
              </label>
              <input
                id="ingredients"
                type="text"
                className="form-control rounded-0"
                placeholder="Name"
                value={ingredients}
                onChange={(event) => setingredients(event.target.value)}
              />
            </div>
            <div className="col">
              <label htmlFor="description" className="form-label fw-semibold">
                Description
              </label>
              <input
                id="description"
                type="text"
                className="form-control rounded-0"
                placeholder="Name"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="mt-3">
          <input
            type="button"
            className="btn btn-info rounded-0"
            value="Back"
            onClick={onBackBtnClickHnd}
          />
          <button
            id="addmenu"
            type="submit"
            className="btn btn-success rounded-0 ms-4"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
