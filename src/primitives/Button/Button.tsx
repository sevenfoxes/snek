import { FC, ReactNode } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { useTestHarness } from '@primitives';
import { styled } from '@utils/styled';

type ButtonProps = MuiButtonProps & {
  children?: ReactNode;
  name: string;
};

const StyledButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: 22,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
    padding: '8px'
  }
}));

export const Button: FC<ButtonProps> = ({ children, variant = 'contained', ...props }) => {
  const id = useTestHarness(props.name, 'button');
  return (
    <StyledButton
      data-testid={id}
      id={id}
      variant={variant}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
