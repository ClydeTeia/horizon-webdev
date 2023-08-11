import React, { useState } from "react";

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
