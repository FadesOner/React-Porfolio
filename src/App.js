import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;

  };
  

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
