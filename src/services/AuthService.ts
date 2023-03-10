import { injectable } from "inversify";
import { BaseService } from "./BaseService";
import { AuthRequestModel, AuthResponseModel } from "../model";

interface IAuthService {
  login(request: AuthRequestModel): Promise<AuthResponseModel>;
}

@injectable()
export class AuthService extends BaseService implements IAuthService {
  public login(request: AuthRequestModel): Promise<AuthResponseModel> {
    return this.httpPost("auth/login", request).then((response) => {
      return response.data;
    });
  }
}
