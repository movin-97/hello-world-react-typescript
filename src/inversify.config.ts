
import "reflect-metadata";
import "reflect-metadata";
import { Container } from "inversify";

import { UserService } from "./services/UserService";
import { AuthService } from "./services/AuthService";
import { ProductsService } from './services/ProductsService';


let container = new Container();
container.bind(AuthService).toSelf();
container.bind(UserService).toSelf();
container.bind(ProductsService).toSelf();

export { container };