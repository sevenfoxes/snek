import { atom, atomFamily, selectorFamily } from "recoil";
import { fieldValidationSelector } from "./fieldState";

export const formFieldsState = atomFamily({
  key: 'formFieldsState',
  default: {},
});

export const formState = atomFamily({
  key: 'formState',
  default: {
    validateOnSubmit: true,
  },
});

export const formStateValidation = atomFamily({
  key: 'formStateValidation',
  default: {},
});


export const formSelector = selectorFamily({
  key: 'formSelector',
  get: (key: string) => ({ get }) => {
    const fields = get(formFieldsState(key));
    const validation = get(formStateValidation(key))

    return {
      fields,
      validation
    }
  },
  set: (key: string) => ({ set, get }, field) => {
    const currentFields = get(formFieldsState(key));
    const validation = get(formStateValidation(key));
    const nValidation = get(fieldValidationSelector(Object.keys(field)[0]))

    console.log(nValidation);
    set(formStateValidation(key), {
      ...validation,

    })
    set(formFieldsState(key), ({ ...currentFields, field }));
  }
});
