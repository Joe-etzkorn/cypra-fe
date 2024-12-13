import { create } from "zustand";
import { produce } from "immer";

interface OperationDashboardPaginationStore {
  topServicesPage: number;
  crewReportPage: number;
  crewLeaderReportPage: number;
  setTopServicesPage: (page: number) => void;
  setCrewReportPage: (page: number) => void;
  setCrewLeaderReportPage: (page: number) => void;
}

export const useOperationDashboardPagination =
  create<OperationDashboardPaginationStore>((set) => ({
    topServicesPage: 1,
    crewReportPage: 1,
    crewLeaderReportPage: 1,
    setTopServicesPage: (page: number) =>
      set(
        produce((state) => {
          state.topServicesPage = page;
        }),
      ),
    setCrewReportPage: (page: number) =>
      set(
        produce((state) => {
          state.crewReportPage = page;
        }),
      ),
    setCrewLeaderReportPage: (page: number) =>
      set(
        produce((state) => {
          state.crewLeaderReportPage = page;
        }),
      ),
  }));
