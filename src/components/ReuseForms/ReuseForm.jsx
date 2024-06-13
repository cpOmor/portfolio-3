import React from "react";
import { useForm, FormProvider } from "react-hook-form";

const ReuseForm = ({ children, onSubmit }) => {
  const methods = useForm();

  const submit = async (data) => {
    try {
      const result = await onSubmit(data);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default ReuseForm;
