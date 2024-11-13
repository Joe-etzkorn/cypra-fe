import React, { useState } from "react";
import AdminGetStarted from "@features/admin-flow-get-started/get-started";
import AdminAccountDetails from "@features/admin-flow-get-started/account-details";
import AdminAspireIntegration from "@features/admin-flow-get-started/aspire-integration";
import AdminPricing from "@features/admin-flow-get-started/pricing";
import AdminPaymentSetup from "@features/admin-flow-get-started/payment-setup";
import AdminThankYou from "@features/admin-flow-get-started/thank-you";

const AdminSetup: React.FC = () => {
  const [step, setStep] = useState(1);


  return (
    <>
      {step === 1 && <AdminGetStarted setStep={setStep} />}
      {step === 2 && <AdminAccountDetails setStep={setStep}  />}
      {step === 3 && <AdminAspireIntegration setStep={setStep}  />}
      {step === 4 && <AdminPricing setStep={setStep}  />}
      {step === 5 && <AdminPaymentSetup setStep={setStep}  />}
      {step === 6 && <AdminThankYou />}
    </>
  )
  
};

export default AdminSetup;
