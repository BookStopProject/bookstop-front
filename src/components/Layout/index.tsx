import type { FC } from "react";
import { Footer } from "../Footer";
import BottomBar, { BottomBarPlaceholder } from "./BottomBar";
import Header from "./Header";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <BottomBar />
      <main className="">{children}</main>
      <Footer />
      <BottomBarPlaceholder />
    </>
  );
};
