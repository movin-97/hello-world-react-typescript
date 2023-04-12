import { UserModel } from "../model/custom.hook.model";
import BaseService from "../services/HookBascService/BaseService";

const useService = () => {
  const _services = new BaseService();

  async function fetchUser() {
    const getUser = await _services.httpGet<UserModel[]>("/users");
    return getUser;
  }

  async function createUser(user: any) {
    const createUser = await _services.httpPost<UserModel>("/users/add", user);
    return createUser;
  }

  async function updateUser(user: UserModel) {
    const updateUser = await _services.httpPut<UserModel>(
      `/users/${user.id}`,
      user
    );
    return updateUser;
  }

  async function deleteUser(id: number) {
    const deleteUser = await _services.httpDelete<UserModel>(`/users/${id}`);
    return deleteUser;
  }

  return { fetchUser, createUser, updateUser, deleteUser };
};

export default useService;
