import { injectable } from "inversify";
// import mockData from '../asserts/items.json'

interface IUserService {
  getAllUser(): any;
}

@injectable()
export class UserService  {
  getAllUser() {
    return ["Movin"]
  }
}
