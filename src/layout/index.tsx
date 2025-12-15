import { Header } from "./Header";
import { Footer } from "./Footer";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default Layout;