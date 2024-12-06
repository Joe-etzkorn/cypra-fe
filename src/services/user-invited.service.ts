import { REQUEST_URL } from "@constants/req-route";
import { httpMethod } from "@utils/api";
import { InviteUserData } from "../types/user";

async function inviteUser(data: InviteUserData) {
  const response = await httpMethod.POST({
    url: `${REQUEST_URL.USER_INVITED}/${data.userInvitedId}`,
    data: {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    },
  });

  return response;
}

async function verifyUserInvitedToken(userInvitedToken: string) {
  const response = await httpMethod.POST({
    url: REQUEST_URL.VERIFY_INVITED_TOKEN,
    data: { token: userInvitedToken },
  });

  return response;
}

export const UserInvitedService = {
  inviteUser,
  verifyUserInvitedToken,
};
