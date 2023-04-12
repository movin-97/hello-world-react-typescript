export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  calories:number;
  ingredients:string;

}

export enum PageEnum {
  list,
  add,
  edit,
}