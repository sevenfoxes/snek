import { FC, useContext, useEffect } from 'react';
import { Box, TextField, TextFieldProps } from '@mui/material';
import { useField } from '@hooks/useField';
import { FormContext } from '@primitives/Form/FormContext';
import { useSetRecoilState } from 'recoil';
import { formFieldsState } from 'src/shared/state';
import { InputError } from './InputError';


export type InputProps = Omit<TextFieldProps, 'variant' | 'withTouched' | 'attributeName' | 'fullWidth'> & {
  withTouched?: boolean;
  fullWidth?: boolean;
  name: string;
  showCharCount?: boolean;
  label: string;
};

export const Input: FC<InputProps> = ({ name, label }) => {
  const formKey = useContext(FormContext);
  const setFields = useSetRecoilState(formFieldsState(formKey));
  const { value, updateField, error } = useField(name);

  useEffect(() => {
    setFields((f) => ({
      ...f,
      [name]: value
    }))
  }, []);

  return (
    <Box sx={{ marginBottom: '1rem' }}>
      <TextField label={label} value={value} onChange={updateField} fullWidth />
      {!!error && <InputError inputName={name} />}
    </Box>
  )
}
