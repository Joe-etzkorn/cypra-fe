import { COOKIE_ITEM, STORAGE_ITEM } from "@constants/common";
import { ROLE } from "@constants/role";
import { AwsService } from "@services/aws-sign.service";
import Cookies from "js-cookie";
import { localStore } from "@utils/storage";

export const useAuth = () => {
  const role = Cookies.get(COOKIE_ITEM.ROLE);

  const logout = async () => {
    try {
      const res = await AwsService.awsSignOut();
      if (res) {
        Cookies.remove(COOKIE_ITEM.ACCESS_TOKEN);
        Cookies.remove(COOKIE_ITEM.ROLE);
        localStore.remove(STORAGE_ITEM.USER_INFO);

        const redirectPath =
          role === ROLE.ADMIN ? "/signin" : "/super-admin-signin";
        window.location.href = redirectPath;
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return { logout };
};
