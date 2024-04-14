import { FC, ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import MediaIcons from "./MediaIcons";
import "./layoutStyle.scss";

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
