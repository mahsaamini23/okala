declare module "types/model" {
import { module } from '../.next/static/chunks/pages/_app';
  export type User = {
    id: string;
    email: string;
    fullName: string;
  };
export type Products = {
  id:number,
  name:string,
  sub: null | [{
      id: number,
      title: string,
      sub:[]
  }]
};
export type ProductsList ={
  idProduct: number,
    idShop: number,
    idCategory: number,
    idSubCategory: number,
    idBrand: number,
    type: string,
    
    points: {
        1: number,
        2: number,
        3: number,
        4: number,
        5: number,
        total: number
    },
    image: string|any,
    price: number,
    order: number,
    entity: boolean,
    title: string,
    date: Date,
    purches:number
};
export type Shop = [
  {
  id:number,
  title:string,
  rate: string,
  subtitle:string,
  image:StaticImageData
}
];
}

