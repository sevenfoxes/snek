import { FC, ElementType, cloneElement, Children } from 'react';
import { useTestHarness } from './useTestHarness';

export type HarnessTargetProps = {
  children: any;
  name: string;
  component?: ElementType;
  additional?: string[];
};

export const HarnessTarget: FC<HarnessTargetProps> = ({ children, name, component = 'span', additional = [] }) => {
  const id = useTestHarness(name, ...additional)
  const Component: ElementType = component;

  return Children.map(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      return <Component id={id} data-testid={id}>{child}</Component>;
    }

    return (child ? cloneElement(child, { id, 'data-testid': id }) : child);
  });
};
