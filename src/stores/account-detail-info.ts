import { create } from "zustand";
import { produce } from "immer";

interface AccountDetailInfo {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  companyName: string;
}

interface AccountDetailInfoStore {
  accountDetailInfo: AccountDetailInfo | null;
  setAccountDetailInfo: (accountDetailInfo: AccountDetailInfo) => void;
}

export const useAccountDetailInfo = create<AccountDetailInfoStore>((set) => ({
  accountDetailInfo: null,
  setAccountDetailInfo: (accountDetailInfo: AccountDetailInfo) =>
    set(
      produce((state) => {
        state.accountDetailInfo = accountDetailInfo;
      }),
    ),
}));
