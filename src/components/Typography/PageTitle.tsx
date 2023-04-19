import type { FC, PropsWithChildren } from "react";

const PageTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="my-4 text-center text-3xl font-bold text-on-surface">
      {children}
    </h1>
  );
};

export default PageTitle;
