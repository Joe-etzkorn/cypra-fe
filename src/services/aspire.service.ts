import { ASPIRE_API_URL } from "@constants/common";
import { message } from "antd";

async function sendAspireRequest(
  method: string,
  endpoint: string,
  body: object,
) {
  try {
    const res = await fetch(`${ASPIRE_API_URL}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: method,
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const error = await res.json();
      throw error;
    }

    return res.json();
  } catch (error) {
    message.error("Invalid credentials");
    console.log(error);
  }
}

export const AspireService = {
  sendAspireRequest,
};
