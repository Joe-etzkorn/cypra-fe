/* eslint-disable */
import { API_URL, COOKIE_ITEM, METHOD } from "@constants/common"
import Cookies from "js-cookie"

const token = Cookies.get(COOKIE_ITEM.ACCESS_TOKEN)

export async function GET(input: { url: string }, headers: HeadersInit = {}) {
  const res = await fetch(API_URL + input.url, {
    method: METHOD.GET,
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  })

  if (!res.ok) {
    const error = await res.json()
    throw error
  }

  return res.json()
}

export async function POST(
  input: { url: string; data: any },
  headers: HeadersInit = {},
) {
  const res = await fetch(API_URL + input.url, {
    method: METHOD.POST,
    headers: {
      ...headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(input.data),
  })

  if (!res.ok) {
    const error = await res.json()
    throw error
  }

  return res.json()
}

export async function PUT(
  input: { url: string; data: any },
  headers: HeadersInit = {},
) {
  const res = await fetch(API_URL + input.url, {
    method: METHOD.PUT,
    headers: {
      ...headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(input.data),
  })

  if (!res.ok) {
    const error = await res.json()
    throw error
  }

  return res.json()
}

export async function PATCH(
  input: { url: string; data: any },
  headers: HeadersInit = {},
) {
  const res = await fetch(API_URL + input.url, {
    method: METHOD.PATCH,
    headers: {
      ...headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(input.data),
  })

  if (!res.ok) {
    const error = await res.json()
    throw error
  }

  return res.json()
}

export async function DELETE(
  input: { url: string; data: any },
  headers: HeadersInit = {},
) {
  const res = await fetch(API_URL + input.url, {
    method: METHOD.DELETE,
    headers: {
      ...headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(input.data),
  })

  if (!res.ok) {
    const error = await res.json()
    throw error
  }

  return res.json()
}

export const httpMethod = {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
}
