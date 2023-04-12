import React, { useEffect, useState } from "react";
import useService from "../../hooks/UseService";
import { FormDataModel, UserModel } from "../../model/index";

const CustomHookAPI = () => {
  const [data, setData] = useState<UserModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>();
  const [formData, setFormData] = useState<FormDataModel>({
    username: "",
    email: "",
  });

  const {users}:any = data;

  const { fetchUser, createUser, updateUser, deleteUser } = useService();

  function fetchAllUser() {
    setIsLoading(true);
    fetchUser()
      .then((response: any) => {
        setData(response.data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetchAllUser();
  }, []);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  if (isLoading) {
    return <div className="text-center fs-1 fw-bolder">Loading...</div>;
  }

  if (error) {
    return <div className="text-center fs-1">Error: {error}</div>;
  }

  return (
    <div className="">
      <h1 className="text-center">CRUD</h1>
      <div className="row g-5">
        {users &&
          users.slice(0, 4).map((item: any) => {
            return (
              <div className="col-3" key={item.id}>
                <div className="card text-bg-primary mb-3">
                  <div className="card-header">
                    {item.firstName.toUpperCase()} {item.lastName.toUpperCase()}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.username.toUpperCase()}
                    </h5>
                    <p className="card-text">{item.email}</p>
                  </div>
                  <div className="card-footer">
                    <button
                      type="button"
                      className="btn btn-info rounded-0"
                      onClick={() =>
                        updateUser({ ...item, username: "Add New Name" })
                      }
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger rounded-0"
                      onClick={() => deleteUser(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="row justify-content-center mt-3">
        <form
          className="col-4 border text-bg-dark p-5"
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            createUser(formData);
          }}
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="username"
              name="email"
              placeholder="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="username"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomHookAPI;
