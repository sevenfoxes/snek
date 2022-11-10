import styled from "@emotion/styled";
import { useForm } from "@hooks/useForm";
import { Button } from "@primitives";
import { FC, ReactNode } from "react";

interface FormProps {
  formIndex: string;
  children: ReactNode;
  onSubmit: (e: any) => void;
  submitText?: string;
  resetText?: string;
}

const Root = styled('form')(() => ({
  '.MuiFormControl-root + .MuiFormControl-root': {
    marginTop: '1rem'
  }
}));

const Footer = styled('div')(() => ({
  textAlign: 'right',
  marginTop: '1rem',
  'button + button': {
    marginLeft: '1rem'
  }
}));

export const Form: FC<FormProps> = ({ children, resetText = 'reset', submitText = 'submit', formIndex }) => {
  const { resetForm, submitForm } = useForm(formIndex, children);

  return (
    <Root>
      {children}
      <Footer>
        <Button name={'reset-form'} onClick={resetForm}>{resetText}</Button>
        <Button name={'submit-form'} onClick={submitForm}>{submitText}</Button>
      </Footer>
    </Root>
  )
}
