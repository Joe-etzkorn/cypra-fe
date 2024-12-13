import { create } from "zustand";
import { produce } from "immer";

interface OpportunitiesReportPaginationStore {
  opportunitiesPage: number;
  setOpportunitiesPage: (page: number) => void;
}

export const useOpportunitiesReportPagination =
  create<OpportunitiesReportPaginationStore>((set) => ({
    opportunitiesPage: 1,
    setOpportunitiesPage: (page: number) =>
      set(
        produce((state) => {
          state.opportunitiesPage = page;
        }),
      ),
  }));
