import { Input } from "@primitives";
import { FC } from "react";
import { Field } from "./types";

export const LastName: FC<Field> = ({ formKey }) => {
  return <Input
    label={'LastName'}
    name={'lastName'}
    formKey={formKey}
  />
};

LastName.displayName = 'lastName'
