import type { FC } from "react";
import BottomBar, { BottomBarPlaceholder } from "./BottomBar";
import Header from "./Header";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <BottomBar />
      {children}
      <BottomBarPlaceholder />
    </>
  );
};
