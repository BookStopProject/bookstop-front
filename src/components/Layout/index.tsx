import type { FC, PropsWithChildren } from "react";
import { Footer } from "../Footer";
import BottomBar, { BottomBarPlaceholder } from "./BottomBar";
import Header from "./Header";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
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
