import { useContext } from 'react';
import { TestContext } from './TestContext';

export const useTestHarness = (name, ...otherModifiers) => {
  const testPrefix = useContext(TestContext);
  const testId = [testPrefix, ...otherModifiers, name].join('-');

  return testId;
};
