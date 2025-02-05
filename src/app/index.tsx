import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
import { Header } from "widgets/Header";
import { Footer } from "widgets/Footer";
import AppRouter from "./router/ui/AppRouter";

export function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
