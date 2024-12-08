import { useAccountDetailInfo } from "@stores/account-detail-info";
import { useMutation } from "@tanstack/react-query";
import { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LoadingComponent from "../components/loading";
import NotFound from "../components/not-found";
import { RequestedAccountService } from "../services/requested-account.service";

interface RouteGuardProps {
  component: FC;
}

const AdminFlowGuard: FC<RouteGuardProps> = ({ component: Component }) => {
  const [searchParams] = useSearchParams();
  const invitationToken = searchParams.get("token");
  const {
    mutate: verifyInvitationToken,
    isPending,
    error,
  } = useMutation({
    mutationFn: RequestedAccountService.verifyAccountReqToken,
  });
  const { setAccountDetailInfo } = useAccountDetailInfo();

  useEffect(() => {
    verifyInvitationToken(invitationToken ?? "", {
      onSuccess: (res) => {
        const { email, companyName, name } = res.data;
        setAccountDetailInfo({
          email,
          firstName: name.split(" ")[0],
          lastName: name.split(" ")[1],
          companyName,
          password: "",
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

export default AdminFlowGuard;
