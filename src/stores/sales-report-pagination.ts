import { create } from "zustand";
import { produce } from "immer";

interface SalesReportPaginationStore {
  opportunitiesWonPage: number;
  setOpportunitiesWonPage: (page: number) => void;
}

export const useSalesReportPagination = create<SalesReportPaginationStore>(
  (set) => ({
    opportunitiesWonPage: 1,
    setOpportunitiesWonPage: (page: number) =>
      set(
        produce((state) => {
          state.opportunitiesWonPage = page;
        }),
      ),
  }),
);
