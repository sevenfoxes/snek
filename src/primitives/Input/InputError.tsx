import { styled } from "@utils";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { fieldErrorState } from "src/shared/state";

interface InputErrorProps {
  withTouched?: boolean;
  inputName: string;
}

const Root = styled('div')(() => ({
  alignItems: 'center',
  display: 'grid',
  fontSize: 12,
  gap: '.2rem',
  gridTemplateColumns: 'min-content 1fr',
  marginTop: 1
}));

export const InputError: FC<InputErrorProps> = ({
  withTouched = true,
  inputName
}) => {
  const error = useRecoilValue<string>(fieldErrorState(inputName));

  if (!error || (error && !withTouched)) {
    return null;
  }

  return (
    <Root>
      <div>{error}</div>
    </Root>
  )
}
