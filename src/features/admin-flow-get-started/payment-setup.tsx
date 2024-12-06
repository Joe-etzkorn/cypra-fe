import React from "react";
import { Button, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import { UserService } from "../../services/user.service";
import { useApiCredentials } from "@stores/apire-credentials";
import { useAccountDetailInfo } from "@stores/account-detail-info";

interface props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const AdminPaymentSetup: React.FC<props> = ({ setStep }) => {
  const { mutate: createUser, isPending } = useMutation({
    mutationFn: UserService.createUser,
    mutationKey: ["/users"],
  });

  const { apiCredentials } = useApiCredentials();
  const { accountDetailInfo } = useAccountDetailInfo();

  const handleSubmit = () => {
    if (!apiCredentials || !accountDetailInfo) return;

    createUser(
      {
        ...apiCredentials,
        ...accountDetailInfo,
      },
      {
        onSuccess: () => {
          message.success("Created user successfully");
          setStep(6);
        },
        onError: (error) => {
          if (error.message) {
            message.error(error.message);
          } else {
            message.error("User create failed");
          }
        },
      },
    );
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#F4F6F6] p-12 rounded-3xl shadow-lg text-center w-[556px]">
        <div className="mb-4">
          <div className="flex items-center justify-center mb-6">
            <img src="/assets/logo.png" alt="Logo" className="h-16 w-16" />
          </div>

          <h1 className="text-2xl font-bold text-[#141922]">Payment Setup</h1>
          <p className="text-[#667174] text-xl mt-2 px-8">
            Subscription payments are handled through Stripe. After you’re setup
            there, you will be redirected back.
          </p>

          <Button
            type="primary"
            className="mt-10 common-btn"
            onClick={handleSubmit}
            loading={isPending}
          >
            Continue to Stripe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminPaymentSetup;
