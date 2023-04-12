import { injectable } from "inversify";
import { BaseService } from "./BaseService";



@injectable()
export class ProductsService extends BaseService{
  public fatchProducts(endUrl: string): Promise<any> {
    return this.httpGet('products', endUrl)
      .then((responce) => {
        return responce
      })
      .catch((error) => console.log(error));
  }
}
