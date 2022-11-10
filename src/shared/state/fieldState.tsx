import { atom, atomFamily, selectorFamily } from "recoil";
import { formFieldsState } from "./formState";
import { string } from 'yup';

export const fieldValidators = atom({
  key: 'fieldsValidationState',
  default: {
    firstName: string().max(50).required('firstName is required')
  }
});

export const fieldValidationSelector = selectorFamily({
  key: 'fieldValidationSelector',
  get: (fieldName: string) => ({ get }) => get(fieldValidators)[fieldName]
});

export const fieldErrorState = atomFamily({
  key: 'fieldErrorState',
  default: ''
})

export const fieldUserState = atomFamily({
  key: 'fieldUserState',
  default: ''
})

export const fieldState = atomFamily({
  key: 'fieldState',
  default: ''
});

export const fieldSelector = selectorFamily({
  key: 'fieldSelector',
  get: (id: string) => ({ get }) => {
    const value = get(fieldState(id));
    const userValue = get(fieldUserState(id));
    const error = get(fieldErrorState(id));
    const validation = get(fieldValidationSelector(id))

    return {
      value: !!userValue ? userValue : value,
      userValue,
      error,
      charCount: !!userValue ? userValue.length : value.length,
      validation
    }
  },
  set: (key: string) => ({ set, get }, { field, formKey }: any) => {
    const form = get(formFieldsState(formKey))
    set(fieldUserState(key), field);
    set(formFieldsState(formKey), { ...form, [key]: field });
  }
})
