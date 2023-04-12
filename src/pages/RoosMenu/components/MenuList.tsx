import { MenuItem } from "../../../model/index";
import { useState } from "react";
import MenuModel from "./MenuModel";

interface Props{
  list: MenuItem[];
  onDeleteClickHnd: (data: MenuItem) => void;
  onEdit: (data: MenuItem) => void;
};

const EmployeeList:React.FC<Props> = ({list,onDeleteClickHnd,onEdit}) => {
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as MenuItem | null);

  const viewEmployee = (data: MenuItem) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);

  console.log(list);

  return (
    <div>
      <article>
        <h3 className="mt-3">Menu List</h3>
      </article>
      <div className="row justify-content-center">
          {list.map((item:MenuItem,i:number) => (
            <div className="col-3 m-2 card text-bg-dark mb-3" id="newItemList" key={i}>
              <div className="card-header d-flex justify-content-around align-items-center">
                <div className="col">
                    <h5>New Item</h5>
                </div>
                <div className="col d-flex justify-content-around">
                <button type='button' className='btn btn-danger btn-sm rounded-0'  onClick={() => onEdit(item)}>Edit</button>
                    
                    <button type='button' className='btn btn-danger btn-sm rounded-0' onClick={() => onDeleteClickHnd(item)}>Delete</button>
                </div>
              </div>
              
              <div className="card-body">
                <h5 className="card-title text-capitalize">{item.name}</h5>
                <p className="card-text">
                  {item.description}
                </p>
                <div className="">
                  <p className="">
                    Calories :{" "}
                    <span className="text-uppercase fw-semibold">
                      {item.calories}
                    </span>
                  </p>
                  <p>
                    Ingredients :{" "}
                    <span className="text-uppercase">
                      "{item.ingredients}"
                    </span>
                  </p>
                </div>
                <p className="text-capitalize fw-bold">
                  Price : $ {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      {showModal && dataToShow !== null && (
        <MenuModel onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};

export default EmployeeList;