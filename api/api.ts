import api from "./axios";

export async function getExample() {
  const res = await api.get("Url");
  return res.data;
}

export async function postExample() {
    const res = await api.post("Url");
    return res.data;
  }
