import { useState } from "react";

export const useFormErrorHandler = () => {
  const [formErrors, setFormErrors] = useState([]);

  const onFinishFailed = (errorInfo: any) => {
    const errors = errorInfo.errorFields.map((error: any) => error.errors[0]);
    setFormErrors(errors);
  };

  const handleFieldsChange = (_: any, allFields: any) => {
    const errors = allFields
      .filter((field: any) => field.errors.length > 0)
      .map((field: any) => field.errors[0]);
    setFormErrors(errors);
  };

  return {
    formErrors,
    onFinishFailed,
    handleFieldsChange
  };
};
