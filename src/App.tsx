import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="max-w-4xl mx-auto pt-16 pl-4">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
