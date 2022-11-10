import { FormContext } from "@primitives/Form/FormContext";
import { useContext } from "react";
import { useRecoilState } from "recoil";
import { fieldSelector } from "../state";

export const useField = (fieldName) => {
  const formKey = useContext(FormContext);
  const [{ value, error, charCount }, setField] = useRecoilState(fieldSelector(fieldName));

  const updateField = (e) => {
    setField({ field: e.target.value, formKey })
  }
  const clearField = () => {
    updateField('');
  };

  return {
    value,
    error,
    charCount,
    clearField,
    updateField
  }
}
