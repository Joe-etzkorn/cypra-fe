import { AuthService } from "@services/auth.service";
import { useResetPasswordInfo } from "@stores/reset-password-info";
import { useMutation } from "@tanstack/react-query";
import { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LoadingComponent from "../components/loading";
import NotFound from "../components/not-found";

interface RouteGuardProps {
  component: FC;
}

const ResetPasswordGuard: FC<RouteGuardProps> = ({ component: Component }) => {
  const [searchParams] = useSearchParams();
  const forgotPasswordToken = searchParams.get("token");
  const {
    mutate: verifyForgotPasswordToken,
    isPending,
    error,
  } = useMutation({
    mutationFn: AuthService.verifyForgotPasswordToken,
  });
  const { setResetPasswordInfo } = useResetPasswordInfo();

  useEffect(() => {
    verifyForgotPasswordToken(
      { token: forgotPasswordToken ?? "" },
      {
        onSuccess: (res) => {
          const email = res.data;
          if (forgotPasswordToken && email) {
            setResetPasswordInfo({
              email,
              resetToken: forgotPasswordToken,
            });
          }
        },
      },
    );
    // eslint-disable-next-line
  }, [forgotPasswordToken]);

  if (isPending) {
    return <LoadingComponent />;
  }

  if (!forgotPasswordToken || error) {
    return <NotFound />;
  }

  return <Component />;
};

export default ResetPasswordGuard;
