import api from "./api";

export async function createShortUrl(request) {
  const response = await api.post("/urls", request);
  return response.data;
}

export async function getMyUrls() {
  const response = await api.get("/urls");
  return response.data;
}

export async function deleteUrl(id) {
  await api.delete(`/urls/${id}`);
}