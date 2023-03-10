import { ProductsResponceModel } from "./../model/products.model";
import { injectable } from "inversify";
import { BaseService } from "./BaseService";



@injectable()
export class ProductsService extends BaseService{
  public fatchProducts(endUrl: string): Promise<ProductsResponceModel> {
    return this.httpGet('products', endUrl)
      .then((responce) => {
        return responce.data.products
      })
      .catch((error) => console.log(error));
  }
}
