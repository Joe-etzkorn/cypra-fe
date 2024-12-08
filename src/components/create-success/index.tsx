import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.css";

interface CreateUserSuccessProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  navigateTo: string;
  buttonText: string;
}

const CreateUserSuccess = ({
  open,
  onClose,
  title,
  description,
  navigateTo,
  buttonText,
}: CreateUserSuccessProps) => {
  const navigate = useNavigate();
  const handleNavigateToSignInPage = () => {
    navigate(navigateTo);
    onClose();
  };

  return (
    <Modal
      onOk={handleNavigateToSignInPage}
      centered
      open={open}
      onCancel={onClose}
      footer={null}
    >
      <div className="flex items-center justify-center">
        <div className="p-12 text-center w-[556px]">
          <div className="flex items-center justify-center mb-6">
            <img src="/assets/logo.png" alt="Logo" className="h-16 w-16" />
          </div>
          <h1 className="text-2xl font-bold text-black">{title}</h1>
          <p className="common-font-color mt-3 mb-10 text-base">
            {description}
          </p>

          <Button
            type="primary"
            htmlType="button"
            className="h-12 font-bold common-btn mt-4 !w-[240px]"
            onClick={handleNavigateToSignInPage}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateUserSuccess;
