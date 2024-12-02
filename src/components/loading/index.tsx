import { Spin } from "antd";

const LoadingComponent = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin />
    </div>
  );
};

export default LoadingComponent;
