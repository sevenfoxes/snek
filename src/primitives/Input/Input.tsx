import { FC, useEffect, useRef, useState } from 'react';
import { Box, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { useField } from '@hooks/useField';


export type InputProps = Omit<TextFieldProps, 'variant' | 'withTouched' | 'attributeName' | 'fullWidth'> & {
  withTouched?: boolean;
  fullWidth?: boolean;
  name: string;
  showCharCount?: boolean;
  label: string;
  formKey: string;
};

export const Input: FC<InputProps> = ({ name, label, formKey }) => {
  const { value, updateField } = useField(`${formKey}-${name}`);

  return <TextField label={label} value={value} onChange={updateField} fullWidth />
}
