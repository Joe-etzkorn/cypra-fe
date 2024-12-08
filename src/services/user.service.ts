import { httpMethod } from "@utils/api";
import { CreateUserData, UpdateUserData } from "../types/user";
import { REQUEST_URL } from "@constants/req-route";

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

async function deleteUser(data: { userCognitoId: string; adminId: number }) {
  const response = await httpMethod.DELETE({
    url: REQUEST_URL.DELETE_USER,
    data: {
      userCognitoId: data.userCognitoId,
      adminId: data.adminId,
    },
  });

  return response;
}

async function toggleAdminPrivilege(data: {
  userId: number;
  adminId: number;
  isAdmin: number;
}) {
  const response = await httpMethod.PUT({
    url: REQUEST_URL.TOGGLE_ADMIN,
    data: {
      adminId: data.adminId,
      userId: data.userId,
      isAdministrator: data.isAdmin,
    },
  });

  return response;
}

export const UserService = {
  createUser,
  updateUser,
  getProfile,
  getUsersOrganization,
  deleteUser,
  toggleAdminPrivilege,
};
