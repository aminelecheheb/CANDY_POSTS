import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <Navbar />
      <div className="page-wrapper">
        {children}
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
