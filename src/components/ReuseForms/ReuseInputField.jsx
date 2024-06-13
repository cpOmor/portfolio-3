import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const ReuseInputField = ({ name, label, type, size, fullWidth }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          size={size}
          variant="outlined"
          fullWidth={fullWidth}
        />
      )}
    />
  );
};

export default ReuseInputField;
