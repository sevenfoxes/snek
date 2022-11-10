import { atomFamily, selectorFamily } from "recoil";

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
  default: 'h'
});

export const fieldSelector = selectorFamily({
  key: 'fieldSelector',
  get: id => ({ get }) => {
    const value = get(fieldState(id));
    const userValue = get(fieldUserState(id));
    const error = get(fieldErrorState(id));

    console.log({
      value: !!userValue ? userValue : value,
      userValue,
      error,
      charCount: !!userValue ? userValue.length : value.length
    });

    return {
      value: !!userValue ? userValue : value,
      userValue,
      error,
      charCount: !!userValue ? userValue.length : value.length
    }
  },
  set: (key: string) => ({ set }, userInput: any) => {
    console.log(key);
    set(fieldUserState(key), userInput.currentTarget.value);
  }
})
