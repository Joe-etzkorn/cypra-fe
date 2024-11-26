export const COOKIE_ITEM = Object.freeze({
  ACCESS_TOKEN: "cypra_access_token",
  REFRESH_TOKEN: "cypra_refresh_token",
  ROLE: "cypra_user_role",
})

export const API_URL = import.meta.env.VITE_API_URL ?? ""

export enum METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export const ASPIRE_API_URL = import.meta.env.VITE_ASPIRE_API_URL ?? ""