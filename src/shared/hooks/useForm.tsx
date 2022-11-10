import { Children, useEffect, isValidElement, cloneElement } from "react";
import { useRecoilCallback, useRecoilState } from "recoil";
import { fieldSelector, fieldState, formSelector } from "../state";

export const useForm = (formId, children) => {
  const [{ fields, fieldValues, getFieldsAndValues }, setForm] = useRecoilState(formSelector(formId));
  const resetForm = () => null;

  const submitForm = async () => {
    console.log('do a submit');
    console.log({ fieldValues, getFieldsAndValues: await getFieldsAndValues() });
  }


  useEffect(() => {
    Children.forEach(children, (c: any) => {
      setForm(c.type.displayName)
      if (isValidElement(c)) {
        return cloneElement(c, { formKey: formId } as any);
      }

      return c;
    });

  }, [children])

  return {
    resetForm,
    submitForm
  }
}
