import useNavState from "@/utils/navState";
import Footer from "./footer";
import Nav from "./navbar";
import MobileNav from "./mobilenav";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { nav, openNav, closeNav } = useNavState();
  return (
    <>
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />
      <main className="justify-between items-center">{children}</main>
      <Footer />
    </>
  );
};
