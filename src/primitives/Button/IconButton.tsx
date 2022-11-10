import { IconButton as MuiIconButton } from '@mui/material';
import { FC, MouseEvent, ReactNode } from 'react';
import { useTestHarness } from '..';

interface IconButtonProps {
  name: string;
  onClick: (e: MouseEvent) => void;
  size?: any;
  color?: any;
  children: ReactNode;
  sx?: any;
  className?: string;
}

export const IconButton: FC<IconButtonProps> = ({ className, sx, name, children, onClick, color = 'primary', size = 'small', ...props }) => {
  const id = useTestHarness(name, 'IconButton');
  return (
    <MuiIconButton
      className={className}
      sx={sx}
      color={color}
      onClick={onClick}
      size={size}
      data-testid={id}
      id={id}
      {...props}
    >
      {children}
    </MuiIconButton>
  )
}
