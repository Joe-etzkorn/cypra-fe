import { httpMethod } from "@utils/api";
import { CreateUserData, UpdateUserData } from "../types/user";

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

async function updateUser(data: UpdateUserData) {
  const response = await httpMethod.PUT({
    url: `/users/${data.userCognitoId}`,
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
    },
  });

  return response;
}

async function getProfile(data: { email: string }) {
  const response = await httpMethod.POST({
    url: "/users/profile",
    data: data,
  });

  return response;
}

async function getUsersOrganization(params: { userId: number }) {
  const { userId } = params;
  const queryParams = new URLSearchParams({
    userId: userId.toString(),
  });

  const response = await httpMethod.GET({
    url: `/users/company-users?${queryParams.toString()}`,
  });

  return response;
}

export const UserService = {
  createUser,
  updateUser,
  getProfile,
  getUsersOrganization,
};
