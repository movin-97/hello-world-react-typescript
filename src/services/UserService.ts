import { injectable } from "inversify";

interface IUserService {
  getAllUser(): any;
}

@injectable()
export class UserService  {
  getAllUser() {
    return ["Logesh"];
  }
}
