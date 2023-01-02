import api from "./axios";
import { HttpResponse } from "types/http";
import { User } from "types/model";

export async function getProducts() {
  const res = await api.get("/api/CategoriesProducts/");
  return res.data;
}

export async function getProductList() {
  const res = await api.get("/api/ProductsList/");
  return res.data;
}

export async function postExample() {
  const res = await api.post("/api/users");
  return res.data;
}
