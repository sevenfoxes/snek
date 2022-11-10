import { Input } from "@primitives";
import { FC } from "react";
import { Field } from "./types";

export const FirstName:FC<Field> = ({ formKey }) => {
  return <Input
    label={'FirstName'}
    name={'firstName'}
    formKey={formKey}
  />
};

FirstName.displayName = 'firstName'
