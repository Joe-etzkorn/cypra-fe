/* eslint-disable */
import { API_URL, COOKIE_ITEM, METHOD } from "@constants/common";
import Cookies from "js-cookie";

const token = Cookies.get(COOKIE_ITEM.ACCESS_TOKEN);

const buildHeaders = (
  headers: HeadersInit = {},
  isJSON = true,
  isAuth = true,
) => {
  return {
    ...headers,
    ...(isJSON && { "Content-Type": "application/json" }),
    ...(isAuth && { Authorization: `Bearer ${token}` }),
  };
};

export async function GET(
  input: { url: string },
  headers: HeadersInit = {},
  isAuth = true,
) {
  const res = await fetch(API_URL + input.url, {
    method: METHOD.GET,
    headers: buildHeaders(headers, false, isAuth),
  });

  if (!res.ok) {
    const error = await res.json();
    throw error;
  }

  return res.json();
}

export async function POST(
  input: { url: string; data: any },
  headers: HeadersInit = {},
  isAuth = true,
) {
  const res = await fetch(API_URL + input.url, {
    method: METHOD.POST,
    headers: buildHeaders(headers, true, isAuth),
    body: JSON.stringify(input.data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw error;
  }

  return res.json();
}

export async function PUT(
  input: { url: string; data: any },
  headers: HeadersInit = {},
  isAuth = true,
) {
  const res = await fetch(API_URL + input.url, {
    method: METHOD.PUT,
    headers: buildHeaders(headers, true, isAuth),
    body: JSON.stringify(input.data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw error;
  }

  return res.json();
}

export async function PATCH(
  input: { url: string; data: any },
  headers: HeadersInit = {},
  isAuth = true,
) {
  const res = await fetch(API_URL + input.url, {
    method: METHOD.PATCH,
    headers: buildHeaders(headers, true, isAuth),
    body: JSON.stringify(input.data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw error;
  }

  return res.json();
}

export async function DELETE(
  input: { url: string; data: any },
  headers: HeadersInit = {},
  isAuth = true,
) {
  const res = await fetch(API_URL + input.url, {
    method: METHOD.DELETE,
    headers: buildHeaders(headers, true, isAuth),
    body: JSON.stringify(input.data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw error;
  }

  return res.json();
}

export const httpMethod = {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
};
