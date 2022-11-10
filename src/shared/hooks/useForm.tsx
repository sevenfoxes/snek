import { Children, useEffect, isValidElement, cloneElement } from "react";
import { useRecoilCallback, useRecoilState, useRecoilValue } from "recoil";
import { object } from "yup";
import { fieldSelector, fieldState, formSelector, formState, formStateValidation } from "../state";

export const useForm = (formId) => {
  const [{ fields }, setForm] = useRecoilState(formSelector(formId));
  const { validateOnSubmit } = useRecoilValue(formState(formId));
  const schema = useRecoilValue(formStateValidation(formId));
  const resetForm = () => null;

  const validate = async () => {
    console.log(schema);
    return await object(schema).validate(fields);
  }

  const submitForm = async () => {
    if (validateOnSubmit) {
      const foo = await validate();
      console.log(foo);
    }
    console.log('do a submit');
    console.log({ fields });
  }

  return {
    resetForm,
    submitForm
  }
}
