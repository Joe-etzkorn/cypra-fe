export interface GetRequestedAccountsParams {
  page: number;
  limit: number;
  hasUsedAspire?: boolean;
  requestedDateFrom?: string;
  requestedDateTo?: string;
  searchValue?: string;
}

export interface RequestedAccount {
  id: number;
  email: string;
  name: string;
  companyName: string;
  phone: string;
  comments: string;
  hasUsedAspire: boolean;
  createdAt: string;
  user: any;
  hasExistedAccount: boolean;
  token: string;
}
