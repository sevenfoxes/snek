import { uniq } from "lodash/fp";
import { atomFamily, selectorFamily } from "recoil";
import { fieldSelector, fieldState } from "./fieldState";

export const formFieldsState = atomFamily({
  key: 'formFieldsState',
  default: [],
});


export const formSelector = selectorFamily({
  key: 'formSelector',
  get: (key: string) => ({ get, getCallback }) => {
    const fields = get(formFieldsState(key));
    const fieldValues = fields.reduce((a, f) => ({ ...a, [f]: get(fieldState(`${key}-${f}`)) }), {});
    const floop = get(fieldState('quoteForm-firstName'));

    const getFieldsAndValues = getCallback(({ snapshot, refresh }) => async () => {

      return await snapshot.getPromise(fieldState('quoteForm-firstName'));

    });

    return {
      fields,
      fieldValues,
      getFieldsAndValues
    }
  },
  set: (key: string) => ({ set, get }, field) => {
    const currentState = get(formFieldsState(key));

    set(formFieldsState(key), uniq([...currentState, `${key}-${field}`]));
  }
});
