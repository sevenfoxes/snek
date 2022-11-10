// do not uncomment!!
// import { NODE_ENV } from '@core/services/Environment/variables';
import { FC, ElementType, cloneElement, Children } from 'react';

export type TestTargetProps = {
  children: any;
  id: string;
  prefix?: string;
  component?: ElementType;
};

export const TestTarget: FC<TestTargetProps> = ({ children, id, prefix = 'Test__', component = 'span' }) => {
  const fullId = prefix ? `${prefix}${id}` : id;
  // if (NODE_ENV === 'production') {
  //   return children;
  // }

  const Component: ElementType = component;

  return Children.map(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      return <Component id={fullId}>{child}</Component>;
    }

    return (child ? cloneElement(child, { id: fullId }) : child);
  });
};
