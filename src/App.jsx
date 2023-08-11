import React, { useState } from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";

function App() {
  const [page, setPage] = useState("homepage");

  return (
    <>
      <Header setPage={setPage} />
      {page === "homepage" && <Homepage />}
      {page === "aboutus" && <AboutUs />}
    </>
  );
}

export default App;
