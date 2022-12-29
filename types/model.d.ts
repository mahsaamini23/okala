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
}