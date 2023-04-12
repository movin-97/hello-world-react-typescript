import { container } from "../../inversify.config";
import { ProductsService } from "../../services/ProductsService";
import React, { useEffect, useState } from "react";

const Dashboard: React.FC = () => {
  const [data, setData] = useState<any>();

  let _service: ProductsService = container.get(ProductsService);
  const fatchData = () => {
    _service.fatchProducts("products").then((response) => setData(response.data.products));
  };
  useEffect(() => {
    fatchData();
  }, []);
  console.log(data,"hello");
  return (
    <div className="mt-3 mb-3">
      <div className="row g-2 m-auto">
        {data && data.map((item: any, i: number) => {
          return (
            <div className="col-md-3" key={i}>
              <div className="card">
                <img
                  src={item.images[0]}
                  className="card-img-top p-5"
                  alt="..."
                  width={"auto"}
                  height={200}
                />
                <div className="card-body">
                  <p className="card-text">{item.description.slice(0, 40)}</p>
                  <p>INR : {item.price}</p>
                  <button className="btn btn-success">ADD</button>
                </div>
              </div>
            </div>
          );
        })}
        hello
      </div>
    </div>
  );
};

export default Dashboard;
