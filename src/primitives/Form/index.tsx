import styled from "@emotion/styled";
import { useForm } from "@hooks/useForm";
import { Button } from "@primitives";
import { FC, ReactNode, useContext } from "react";
import { FormContext, FormProvider } from './FormContext';

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
  const { resetForm, submitForm } = useForm(formIndex);

  return (
    <FormProvider value={formIndex}>
      <Root>
        {children}
        <Footer>
          <Button name={'reset-form'} onClick={resetForm}>{resetText}</Button>
          <Button name={'submit-form'} onClick={submitForm}>{submitText}</Button>
        </Footer>
      </Root>
    </FormProvider>
  )
}
