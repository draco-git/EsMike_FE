import { TextField, TextFieldProps } from "@mui/material";
import { Controller, ControllerProps } from "react-hook-form";

export interface TextFieldControllerConfig {
  readonly name: string;
  readonly textFieldProps: TextFieldProps;
  readonly controllerProps: Omit<ControllerProps, "render" | "name">;
}

export const TextFieldController = ({
  name,
  textFieldProps,
  controllerProps,
}: TextFieldControllerConfig) => {
  console.log("dcd", name);
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => <TextField {...textFieldProps} {...field} />}
        {...controllerProps}
      />
    </>
  );
};
