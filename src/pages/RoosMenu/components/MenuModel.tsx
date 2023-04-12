import React from "react";
import { MenuItem } from "../../../model/index";

interface Props {
  onClose: () => void;
  data: MenuItem;
}

const EmployeeModal: React.FC<Props> = ({ data, onClose }) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>Menu</h3>
        <div>
          <div>
            <label>{data.name}</label>
          </div>
          <div>
            <label>{data.price}</label>
          </div>
          <div>
            <label>{data.description}</label>
          </div>
          <div>
            <label>{data.calories}</label>
          </div>
          <div>
            <label>{data.ingredients}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal;
