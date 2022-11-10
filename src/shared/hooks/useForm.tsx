import { Children, useEffect, isValidElement, cloneElement } from "react";
import { useRecoilCallback, useRecoilState } from "recoil";
import { fieldSelector, fieldState, formSelector } from "../state";

export const useForm = (formId) => {
  const [{ fields }, setForm] = useRecoilState(formSelector(formId));
  const resetForm = () => null;

  const submitForm = async () => {
    console.log('do a submit');
    console.log({ fields });
  }

  return {
    resetForm,
    submitForm
  }
}
