import { httpMethod } from "@utils/api";
import { Pagination } from "../types/common";

interface CreateAccountRequestData {
  name: string;
  email: string;
  companyName: string;
  phone: string;
  comment: string;
  hasUsedAspire: boolean;
}

async function createAccountRequest(data: CreateAccountRequestData) {
  const response = await httpMethod.POST({
    url: "/request-account",
    data: data,
  });

  return response;
}

async function getRequestedAccounts(pagination: Pagination) {
  const response = await httpMethod.GET({
    url: `/requested-account?page=${pagination.page}&limit=${pagination.limit}`,
  });

  return response;
}

export const RequestedAccountService = {
  createAccountRequest,
  getRequestedAccounts,
};
