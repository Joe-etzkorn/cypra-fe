import { create } from "zustand";
import { produce } from "immer";

interface UserInvitedInfo {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

interface UserInvitedInfoStore {
  userInvitedInfo: UserInvitedInfo | null;
  setUserInvitedInfo: (userInvitedInfo: UserInvitedInfo) => void;
}

export const useUserInvitedInfo = create<UserInvitedInfoStore>((set) => ({
  userInvitedInfo: null,
  setUserInvitedInfo: (userInvitedInfo: UserInvitedInfo) =>
    set(
      produce((state) => {
        state.userInvitedInfo = userInvitedInfo;
      }),
    ),
}));
