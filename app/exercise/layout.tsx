import { ReactNode } from 'react';
import Sidebar from './sidebar';
import Header from './header';
import Footer from './footer';
import NavbarComponent from "../components/Navbar";
import { SidebarMenu } from "../components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}


const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <NavbarComponent />
      <div className="flex">
        <div className="hidden sm:block">
          <SidebarMenu />
        </div>
        <main className="w-full p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
