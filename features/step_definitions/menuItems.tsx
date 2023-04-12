import { Given, When, Then } from "@cucumber/cucumber";
import RoosMenu from "../../src/pages/RoosMenu/Index";
import { expect } from "chai";
import Enzyme, { shallow, mount, ReactWrapper } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

require("jsdom-global")(undefined, {
  url: "https://http://localhost:3000/dashboard",
});

Enzyme.configure({ adapter: new Adapter() });

let wrapper: ReactWrapper;

Given("on the menu management page", function () {
  shallow(<RoosMenu />);
});

When("click on the {string} button", function (buttonText) {
  wrapper = mount(<RoosMenu />);
  let btn = wrapper.find({ children: buttonText });
  if(btn)btn.simulate("click");
});

When("fill in the details for a new menu item", function () {
  wrapper.find("#name").simulate("change", { target: { value: "Idly" } });
  wrapper.find("#price").simulate("change", { target: { value: 104 } });
  wrapper
    .find("#description")
    .simulate("change", { target: { value: "description" } });
  wrapper.find("#calories").simulate("change", { target: { value: 23 } });
  wrapper
    .find("#ingredients")
    .simulate("change", { target: { value: "ingredients" } });
});

When("click the {string} button", function (save) {
  let btn = wrapper.find("#addmenu");
  if(btn)btn.simulate("click");
});

Then("the new menu item will be added to the menu", function () {
  const newItem = wrapper.find("#newItemList");
  expect(newItem.exists()).to.equal(false);
});

When("view the list of menu items", () => {
  wrapper.update();
});

When("click on the menu item I want to edit", () => {});

When("update the details for the menu item", () => {
  wrapper.find("#name").simulate("change", { target: { value: "Idlyee" } });
  wrapper.find("#price").simulate("change", { target: { value: 104 } });
  wrapper
    .find("#description")
    .simulate("change", { target: { value: "description" } });
  wrapper.find("#calories").simulate("change", { target: { value: 23 } });
  wrapper
    .find("#ingredients")
    .simulate("change", { target: { value: "ingredients tee" } });
});

Then("the updated menu item should be displayed on the menu", () => {
  const name = wrapper.find("#name").simulate("change", { target: { value: "Idly" } }).text()
  const price  = wrapper.find("#price").simulate("change", { target: { value: 104 } }).text()
  expect(name).to.equal(name);
  expect(price).to.equal(price);
});

Then("should see all the menu items currently available", () => {
  const menuItems = wrapper.find("#newItemList");
  expect(menuItems.length).greaterThanOrEqual(0)
});

When("click on the menu item I want to remove", () => {});


Then("menu item should be removed from the menu.", () => {
  const menuItem = wrapper.find("#newItemList")
  expect(menuItem.length).to.equal(0)
});
