import { uniq } from "lodash/fp";
import { atomFamily, selectorFamily } from "recoil";
import { fieldSelector, fieldState } from "./fieldState";

export const formFieldsState = atomFamily({
  key: 'formFieldsState',
  default: {},
});


export const formSelector = selectorFamily({
  key: 'formSelector',
  get: (key: string) => ({ get }) => {
    const fields = get(formFieldsState(key));

    return {
      fields
    }
  },
  set: (key: string) => ({ set, get }, field) => {
    const currentState = get(formFieldsState(key));

    set(formFieldsState(key), ({ ...currentState, field }));
  }
});
