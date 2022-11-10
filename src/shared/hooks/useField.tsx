import { useRecoilState } from "recoil";
import { fieldSelector } from "../state";

export const useField = (fieldName) => {
  const [{ value, error, charCount }, updateField] = useRecoilState(fieldSelector(fieldName))
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
