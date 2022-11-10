import { FC, useContext, useEffect } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { useField } from '@hooks/useField';
import { FormContext } from '@primitives/Form/FormContext';
import { useForm } from '@hooks/useForm';
import { useRecoilState } from 'recoil';
import { formFieldsState } from 'src/shared/state';


export type InputProps = Omit<TextFieldProps, 'variant' | 'withTouched' | 'attributeName' | 'fullWidth'> & {
  withTouched?: boolean;
  fullWidth?: boolean;
  name: string;
  showCharCount?: boolean;
  label: string;
};

export const Input: FC<InputProps> = ({ name, label }) => {
  const formKey = useContext(FormContext);
  const [fields, setFields] = useRecoilState(formFieldsState(formKey));
  const { value, updateField } = useField(name);

  return <TextField label={label} value={value} onChange={updateField} fullWidth />
}
