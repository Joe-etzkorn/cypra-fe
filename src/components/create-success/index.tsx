import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";

interface CreateUserSuccessProps {
  open: boolean;
  onClose: () => void;
}

const CreateUserSuccess = ({ open, onClose }: CreateUserSuccessProps) => {
  const navigate = useNavigate();
  const handleNavigateToSignInPage = () => {
    navigate("/signin");
    onClose();
  };

  return (
    <Modal
      onOk={handleNavigateToSignInPage}
      centered
      open={open}
      onCancel={onClose}
      footer={null}
      className="!bg-[#F4F6F6] !rounded-3xl !shadow-lg !text-center"
    >
      <div className="flex items-center justify-center">
        <div className="p-12 text-center w-[556px]">
          <div className="flex items-center justify-center mb-6">
            <img src="/assets/logo.png" alt="Logo" className="h-16 w-16" />
          </div>
          <h1 className="text-2xl font-bold text-black">
            Account created successfully!
          </h1>
          <p className="common-font-color mt-3 mb-10 text-base">
            Your account has been created successfully. Please sign in to
            continue.
          </p>

          <Button
            type="primary"
            htmlType="button"
            className="h-12 font-bold common-btn mt-4 !w-[240px]"
            onClick={handleNavigateToSignInPage}
          >
            Sign in
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateUserSuccess;
