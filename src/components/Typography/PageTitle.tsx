import type { FC } from "react";

const PageTitle: FC = ({ children }) => {
  return (
    <h1 className="my-4 text-3xl font-bold text-center text-on-surface">
      {children}
    </h1>
  );
};

export default PageTitle;
