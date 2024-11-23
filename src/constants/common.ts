export const COOKIE_ITEM = Object.freeze({
  ACCESS_TOKEN: "cypra_access_token",
  REFRESH_TOKEN: "cypra_refresh_token",
})

export const API_URL = import.meta.env.VITE_API_URL ?? ""

export enum METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}
