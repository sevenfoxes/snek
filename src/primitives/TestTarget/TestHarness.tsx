import { FC, ReactNode } from "react"
import { TestContext } from "./TestContext"

interface TestHarnessProps {
  children: ReactNode;
  value: string;
}

export const TestHarness: FC<TestHarnessProps> = ({ children, value }) => {
  // TODO: bail out when in production
  // return children

  return (
    <TestContext.Provider value={value}>
      {children}
    </TestContext.Provider>
  );
};
