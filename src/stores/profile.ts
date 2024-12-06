import { create } from "zustand";
import { produce } from "immer";
import { localStore } from "@utils/storage";
import { STORAGE_ITEM } from "@constants/common";
import { IUserProfile } from "../types/profile";

interface ProfileStore {
  profile: IUserProfile | null;
  setProfile: (profile: IUserProfile) => void;
}

export const useProfile = create<ProfileStore>((set) => ({
  profile: localStore.get(STORAGE_ITEM.USER_INFO),
  setProfile: (profile: IUserProfile) => {
    set(
      produce((state) => {
        state.profile = profile;
      }),
    );
    localStore.set(STORAGE_ITEM.USER_INFO, profile);
  },
}));
