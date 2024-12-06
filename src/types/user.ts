export type User = {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};
export type CreateUserData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  companyName?: string;
  clientId?: string;
  clientSecret?: string;
};

export type UpdateUserData = {
  userCognitoId: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export enum AwsRole {
  SUPER_ADMIN = "SuperAdmin",
  ADMIN = "Admin",
  USER = "User",
}

export type InviteUserData = {
  userInvitedId: number;
  email: string;
  firstName: string;
  lastName: string;
};
