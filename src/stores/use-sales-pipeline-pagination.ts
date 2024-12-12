import { create } from "zustand";
import { produce } from "immer";

interface SalesPipelinePaginationStore {
  biddingPage: number;
  deliveredPage: number;
  opportunitiesPage: number;
  setBiddingPage: (page: number) => void;
  setDeliveredPage: (page: number) => void;
  setOpportunitiesPage: (page: number) => void;
}

export const useSalesPipelinePagination = create<SalesPipelinePaginationStore>(
  (set) => ({
    biddingPage: 1,
    deliveredPage: 1,
    opportunitiesPage: 1,
    setBiddingPage: (page: number) =>
      set(
        produce((state) => {
          state.biddingPage = page;
        }),
      ),
    setDeliveredPage: (page: number) =>
      set(
        produce((state) => {
          state.deliveredPage = page;
        }),
      ),
    setOpportunitiesPage: (page: number) =>
      set(
        produce((state) => {
          state.opportunitiesPage = page;
        }),
      ),
  }),
);
