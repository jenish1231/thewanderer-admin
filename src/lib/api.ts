import axios from "axios"

// ponytail: no endpoints wired yet — hooks/queries.ts serves mock data. Swap queryFns to `api.get(...)` when the API lands.
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:8000/api/v1",
})
