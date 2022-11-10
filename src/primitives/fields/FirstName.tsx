import { Input } from "@primitives";
import { FC } from "react";
import { Field } from "./types";

export const FirstName: FC<Field> = () => {
  return <Input
    label={'FirstName'}
    name={'firstName'}
  />
};
