import { create } from "zustand";
import { produce } from "immer";

interface ResetPasswordInfo {
  email: string;
  resetToken: string;
}

interface ResetPasswordInfoStore {
  resetPasswordInfo: ResetPasswordInfo | null;
  setResetPasswordInfo: (resetPasswordInfo: ResetPasswordInfo) => void;
}

export const useResetPasswordInfo = create<ResetPasswordInfoStore>((set) => ({
  resetPasswordInfo: null,
  setResetPasswordInfo: (resetPasswordInfo: ResetPasswordInfo) =>
    set(
      produce((state) => {
        state.resetPasswordInfo = resetPasswordInfo;
      }),
    ),
}));
