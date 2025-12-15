import { CircularProgress } from "@mui/material";
import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Suspense } from "react";

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