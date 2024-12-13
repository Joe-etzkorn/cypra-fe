import { useMutation } from "@tanstack/react-query";
import { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LoadingComponent from "../components/loading";
import NotFound from "../components/not-found";
import { useUserInvitedInfo } from "@stores/user-invited-info";
import { UserInvitedService } from "../services/user-invited.service";

interface RouteGuardProps {
  component: FC;
}

const UserInvitedGuard: FC<RouteGuardProps> = ({ component: Component }) => {
  const [searchParams] = useSearchParams();
  const invitationToken = searchParams.get("token");
  const {
    mutate: verifyInvitationToken,
    isPending,
    error,
  } = useMutation({
    mutationFn: UserInvitedService.verifyUserInvitedToken,
  });
  const { setUserInvitedInfo } = useUserInvitedInfo();

  useEffect(() => {
    verifyInvitationToken(invitationToken ?? "", {
      onSuccess: (res) => {
        const { email, firstName, lastName, invitedUser } = res.data;
        setUserInvitedInfo({
          email,
          firstName,
          lastName,
          password: "",
          invitedUser,
        });
      },
    });
    // eslint-disable-next-line
  }, [invitationToken]);

  if (isPending) {
    return <LoadingComponent />;
  }

  if (!invitationToken || error) {
    return <NotFound />;
  }

  return <Component />;
};

export default UserInvitedGuard;
