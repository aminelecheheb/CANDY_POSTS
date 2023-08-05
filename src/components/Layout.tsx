import { useGlobalContext } from "@/context/appContext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ToggleNav from "./ToggleNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { state } = useGlobalContext();
  const { navToggle } = state;
  return (
    <div className="toggle_container">
      <div className={`container ${navToggle && "ml"}`}>
        <Navbar />
        <div className="page-wrapper">
          {children}
          <Sidebar />
        </div>
      </div>
      <ToggleNav />
    </div>
  );
};

export default Layout;
