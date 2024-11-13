import React from "react";
import { Button } from 'antd';

interface props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const AdminGetStarted: React.FC<props> = ({ setStep }) => {

  return (
  <div className="flex items-center justify-center min-h-screen">
    <div className="bg-[#F4F6F6] p-12 rounded-3xl shadow-lg text-center w-[556px]">
      <div className="mb-4">
        <div className="flex items-center justify-center mb-6">
          <img src="/assets/logo.png" alt="Logo" className="h-16 w-16" />
        </div>

        <h1 className="text-2xl font-bold text-[#141922]">Welcome, George!</h1>
        <p className="text-[#667174] text-xl mt-2 px-8">
          Let’s get your account up and running. Complete the next few steps and
          you will be on your way to improving your business reporting.
        </p>

        <Button type="primary" className="mt-10 common-btn" onClick={() => setStep(2)}>
          Get Started
        </Button>
      </div>
    </div>
  </div>
  )
  
};

export default AdminGetStarted;
