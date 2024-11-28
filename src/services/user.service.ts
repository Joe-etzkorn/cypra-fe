import { httpMethod } from "@utils/api";

interface CreateUserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  companyName: string;
  clientId: string;
  clientSecret: string;
}

interface CreateAccountRequestData {
  name: string;
  email: string;
  companyName: string;
  phone: string;
  comment: string;
  hasUsedAspire: boolean;
}

async function createUser(data: CreateUserData) {
  const response = await httpMethod.POST({
    url: "/users",
    data: data,
  });

  return response;
}

async function createAccountRequest(data: CreateAccountRequestData) {
  const response = await httpMethod.POST({
    url: "/users/request-account",
    data: data,
  });

  return response;
}

export const UserService = {
  createUser,
  createAccountRequest,
};
