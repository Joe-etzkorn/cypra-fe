import { httpMethod } from "@utils/api";
import { GetRequestedAccountsParams } from "../types/request-account";
import { REQUEST_URL } from "@constants/req-route";

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
    url: "/requested-account",
    data: data,
  });

  return response;
}

async function getRequestedAccounts(params: GetRequestedAccountsParams) {
  const {
    page,
    limit,
    searchValue = "",
    hasUsedAspire,
    requestedDateFrom,
    requestedDateTo,
  } = params;

  const queryParams = new URLSearchParams({
    limit: limit.toString(),
    page: page.toString(),
    searchValue,
    ...(hasUsedAspire !== undefined && {
      hasUsedAspire: hasUsedAspire.toString(),
    }),
    ...(requestedDateFrom !== undefined && {
      requestedDateFrom: requestedDateFrom.toString(),
    }),
    ...(requestedDateTo !== undefined && {
      requestedDateTo: requestedDateTo.toString(),
    }),
  });

  const response = await httpMethod.GET({
    url: `${REQUEST_URL.REQUESTED_ACCOUNTS}?${queryParams.toString()}`,
  });

  return response;
}

async function generateAccountReqToken(requestedAccountId: number) {
  const response = await httpMethod.POST({
    url: REQUEST_URL.GENERATE_TOKEN,
    data: { requestedAccountId },
  });

  return response;
}

async function verifyAccountReqToken(accountRequestToken: string) {
  const response = await httpMethod.POST({
    url: REQUEST_URL.VERIFY_TOKEN,
    data: { token: accountRequestToken },
  });

  return response;
}

export const RequestedAccountService = {
  createAccountRequest,
  getRequestedAccounts,
  generateAccountReqToken,
  verifyAccountReqToken,
};
