import React from "react";
import { Flex } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface props {
  formErrors: string[];
}
const DisplayErrorMessages: React.FC<props> = ({ formErrors }) => {
  return (
    <div className="pt-4 text-left">
      {formErrors.map((error, index) => (
        <Flex justify="flex-start" align="center">
          <FontAwesomeIcon icon={faXmark} className="text-red-500 mr-2" />
          <p key={index} className="text-red-500">
            {error}
          </p>
        </Flex>
      ))}
    </div>
  );
};

export default DisplayErrorMessages;
