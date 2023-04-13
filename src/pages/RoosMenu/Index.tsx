import { MenuItem, PageEnum } from "../../model/index";
import { useEffect, useState } from "react";
import AddMenu from "./components/AddMenu";
import EditMenu from "./components/EditMenu";
import MenuList from "./components/MenuList";
import axios from "axios";

const RoosMenu = () => {
  const [menuItems, setMenuItems] = useState([] as MenuItem[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as MenuItem);

  useEffect(() => {
    const listInString = window.localStorage.getItem("EmployeeList");
    if (listInString) {
      _setMenuList(JSON.parse(listInString));
    }
  }, []);

  const onAddMenuClickHnd = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const _setMenuList = (list: MenuItem[]) => {
    setMenuItems(list);
    window.localStorage.setItem("MenuItems", JSON.stringify(list));
    console.log(list);
  };

  const addMenu = (data: MenuItem) => {
    _setMenuList([...menuItems, data]);
    console.log(data);
  };

  const deleteMenu = (data: MenuItem) => {
    const indexToDelete = menuItems.indexOf(data);
    const tempList = [...menuItems];

    tempList.splice(indexToDelete, 1);
    _setMenuList(tempList);
  };

  const editMenuData = (data: MenuItem) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: MenuItem) => {
    const filteredData = menuItems.filter((x) => x.id === data.id)[0];
    const indexOfRecord = menuItems.indexOf(filteredData);
    const tempData = [...menuItems];
    tempData[indexOfRecord] = data;
    _setMenuList(tempData);
  };

  return (
    <>
      <article className="text-center">
        <header>
          <h1 className="fw-bolder">Roos Menu</h1>
        </header>
      </article>

      <section className="text-center">
        {shownPage === PageEnum.list && (
          <>
            <button
              type="button"
              value="Add Menu"
              onClick={onAddMenuClickHnd}
              className="btn btn-primary rounded-0"
            >
              Add Menu
            </button>
            <MenuList
              list={menuItems}
              onDeleteClickHnd={deleteMenu}
              onEdit={editMenuData}
            />
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddMenu
            onBackBtnClickHnd={showListPage}
            onSubmitClickHnd={addMenu}
          />
        )}

        {shownPage === PageEnum.edit && (
          <EditMenu
            data={dataToEdit}
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
          />
        )}
      </section>
    </>
  );
};

export default RoosMenu;
