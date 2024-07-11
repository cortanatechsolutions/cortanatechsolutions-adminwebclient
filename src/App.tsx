import Sidebar from "./components/sidebar/Sidebar.tsx";
import Footer from "./components/footer/Footer.tsx";
import Header from "./components/header/Header.tsx";
import KTComponent from "./metronic/core";
import { useEffect } from "react";
import KTLayout from "./metronic/app/layouts/demo1.js";
import SearchModal from "./components/search/SearchModal.tsx";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboards/maindashboard.tsx";
import SecondDashboard from "./pages/dashboards/seconddashboard.tsx";
import ErrorPage404 from "./pages/errors/404.tsx";

function App() {
  useEffect(() => {
    KTComponent.init();
    KTLayout.init();
  }, []);

  return (
    <>
      <div className="flex grow">
        <Sidebar />
        <div className="wrapper flex grow flex-col">
          <Header />
          <main className="grow content pt-5" id="content" role="content">
            <div className="container-fixed" id="content_container"></div>
            <div className="container-fixed">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/secondDashboard" element={<SecondDashboard />} />

                {/* Catch all unmatched routes */}
                <Route path="*" element={<ErrorPage404 />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </div>
      <SearchModal />
    </>
  );
}

export default App;
