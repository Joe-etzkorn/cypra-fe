import { REQUEST_URL } from "@constants/req-route";
import { httpMethod } from "@utils/api";

async function login(data: { email: string; password: string }) {
  const response = await httpMethod.POST({
    url: "/auth/login",
    data: data,
  });

  return response;
}

async function forgotPassword(data: { email: string }) {
  const response = await httpMethod.POST({
    url: REQUEST_URL.FORGOT_PASSWORD,
    data: data,
  });

  return response;
}

async function verifyForgotPasswordToken(data: { token: string }) {
  const response = await httpMethod.POST({
    url: REQUEST_URL.VERIFY_FORGOT_PASSWORD_TOKEN,
    data: data,
  });

  return response;
}

async function resetPassword(data: { token: string; newPassword: string }) {
  const response = await httpMethod.POST({
    url: REQUEST_URL.RESET_PASSWORD,
    data: data,
  });

  return response;
}

export const AuthService = {
  login,
  forgotPassword,
  verifyForgotPasswordToken,
  resetPassword,
};
