import { expect } from "chai";
import axios from "axios";
import { Given, When, Then } from "@cucumber/cucumber";
import { AxiosResponse } from "axios";
// import {MenuItemsService} from '../../src/services/MenuItemsService';
import {BaseService} from '../../src/services/BaseService'
// import MenuItem from "../../public/items.json";

interface Product {
  id:string;
  name:string;
  price:string;
  description:string;
  image:string;
  calories:string;
  ingredients:Array<string>
  variants:Array<NamePrice>
  allergies:Array<any>
  addon:Array<NamePrice>
  tags:Array<string>;
}

interface NamePrice{
  name:string;
  price:number;
}

interface ProductResponse {
  data: Product[];
}

let response: AxiosResponse<ProductResponse>;

// const _service = new BaseService();

Given("the API endpoint is {string}", async (endpoint: string) => {
  response  = await axios.get(`https://dummyjson.com/${endpoint}`)
});

When("I make a GET request to the endpoint", () => {});

Then("the response status code should be {int}", (statusCode: number) => {
  expect(response.status).to.equal(statusCode);
});

Then("the response should contain an array of data objects", () => {
  expect([response.data.data])
    .to.be.an("array")
    .and.include(response.data.data);
});

Then(
  "each data object should have the fields {string}, {string}, and {string}",
  (idField: string, titleField: string, descriptionField: string) => {
    const product = response.data;
    expect(product).to.have.property(idField);
    expect(product).to.have.property(titleField);
    expect(product).to.have.property(descriptionField);
  }
);
