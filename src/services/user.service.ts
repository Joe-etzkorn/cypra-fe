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

async function createUser(data: CreateUserData) {
  const response = await httpMethod.POST(
    {
      url: "/users",
      data: data,
    },
    {},
    false,
  );

  return response;
}

export const UserService = {
  createUser,
};
