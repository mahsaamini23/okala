import api from "./axios";
import { HttpResponse } from "types/http";
import { User } from "types/model";

export async function getExample() {
  const res = await api.get<HttpResponse<User[]>>("/api/users/");
  return res.data;
}

export async function postExample() {
    const res = await api.post("/api/users");
    return res.data;
  }
