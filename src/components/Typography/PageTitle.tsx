import type { FC } from "react";

const PageTitle: FC = ({ children }) => {
  return <h1 className="mb-4 text-3xl font-black text-center">{children}</h1>;
};

export default PageTitle;
