import MainNavbar from "components/Navbar";
import Footer from "components/Footer";

function MainLayout({ children }) {
  return (
    <>
      <MainNavbar />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
