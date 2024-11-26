import { FC } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { COOKIE_ITEM } from "@constants/common";
import { ROLE as Role } from "@constants/role";
import PermissionDenied from "../components/permission-denied";

interface RouteGuardProps {
  component: FC;
  allowedRoles: Role[];
  publicRoute?: boolean;
}

const RouteGuard: FC<RouteGuardProps> = ({
  component: Component,
  allowedRoles,
  publicRoute = false,
}) => {
  const token = Cookies.get(COOKIE_ITEM.ACCESS_TOKEN);
  const userRole = Cookies.get(COOKIE_ITEM.ROLE);

  if (publicRoute && !token) {
    return <Component />;
  }

  if (!token && !publicRoute) {
    return <Navigate to="/signin" replace />;
  }

  if (!allowedRoles.includes(userRole as Role)) {
    return <PermissionDenied />;
  }

  return <Component />;
};

export default RouteGuard;
