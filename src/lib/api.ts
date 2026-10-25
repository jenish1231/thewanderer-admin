import axios, { isAxiosError } from "axios"
import { useAuthStore } from "@/store/auth"

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:8000/api/v1",
})

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// An expired or revoked session anywhere signs the admin out; RequireAuth then redirects to /signin.
api.interceptors.response.use(undefined, (error) => {
  if (isAxiosError(error) && error.response?.status === 401) useAuthStore.getState().signOut()
  return Promise.reject(error)
})

/** The API's `{"error": "..."}` message, or a fallback when the server can't be reached. */
export function apiErrorMessage(error: unknown): string {
  if (isAxiosError(error)) {
    if (!error.response) return "Can't reach the server. Try again shortly."
    if (typeof error.response.data?.error === "string") return error.response.data.error
  }
  return "Something went wrong. Try again."
}
