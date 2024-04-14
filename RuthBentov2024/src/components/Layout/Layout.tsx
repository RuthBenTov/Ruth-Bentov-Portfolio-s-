import { FC, ReactNode } from "react";
import "./layoutStyle.scss";
import Navbar from "../Navbar/Navbar";
import MediaIcons from "./MediaIcons";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="centeredLayout">
      <Navbar />
      <img className="logo" src="/images/logo.png" alt="" />
      <div>{children}</div>
      <MediaIcons />
    </div>
  );
};

export default Layout;
