import React from "react";
import Sidebar from "./SideBar";
import Footer from "./Footer";
import Header from "./Header";
import Customers from "./Companies";
import Routers from "../Routes/Routers";

export default function Layout() {
  return (
    <div class="">
      <div class="grid grid-cols-6 h-screen">
        <Sidebar />

        <div class="col-span-5 col-start-2 grid grid-rows-layout">
          <Header />
          <Routers />

          <Footer />
        </div>
      </div>
    </div>
  );
}
