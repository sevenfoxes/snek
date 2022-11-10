import { atomFamily, selectorFamily } from "recoil";
import { formFieldsState } from "./formState";

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
  get: id => ({ get }) => {
    const value = get(fieldState(id));
    const userValue = get(fieldUserState(id));
    const error = get(fieldErrorState(id));

    // console.log({
    //   value: !!userValue ? userValue : value,
    //   userValue,
    //   error,
    //   charCount: !!userValue ? userValue.length : value.length
    // });

    return {
      value: !!userValue ? userValue : value,
      userValue,
      error,
      charCount: !!userValue ? userValue.length : value.length
    }
  },
  set: (key: string) => ({ set, get }, { field, formKey }: any) => {
    const form = get(formFieldsState(formKey))
    set(fieldUserState(key), field);
    set(formFieldsState(formKey), { ...form, [key]: field });
  }
})
