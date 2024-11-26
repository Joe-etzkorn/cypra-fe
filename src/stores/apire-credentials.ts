import { create } from "zustand";
import { produce } from "immer";

interface ApiCredentials {
  clientId: string;
  clientSecret: string;
}

interface ApiCredentialsStore {
  apiCredentials: ApiCredentials | null;
  setApiCredentials: (apiCredentials: ApiCredentials) => void;
}

export const useApiCredentials = create<ApiCredentialsStore>((set) => ({
  apiCredentials: null,
  setApiCredentials: (apiCredentials: ApiCredentials) =>
    set(
      produce((state) => {
          state.apiCredentials = apiCredentials;
      }),
    ),
}));
