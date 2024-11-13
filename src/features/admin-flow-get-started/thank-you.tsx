import React from "react";
import { Button } from "antd";

const AdminThankYou: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#F4F6F6] p-12 rounded-3xl shadow-lg text-center w-[556px]">
        <div className="mb-4">
          <div className="flex items-center justify-center mb-6">
            <img src="/assets/logo.png" alt="Logo" className="h-16 w-16" />
          </div>

          <h1 className="text-2xl font-bold text-[#141922]">
          Thank You!
          </h1>
          <p className="text-[#667174] text-xl mt-2 px-8">
            Your account is being processed and will be live in the next 48
            hours. You will receive an email when your account has been
            activated.
          </p>

          <Button type="primary" className="mt-10 common-btn">
            Return to Cypra.io
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminThankYou;
