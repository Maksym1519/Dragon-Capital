import React from "react";
import { ReactDOM } from "react-dom";
import { lazy, Suspense } from "react";
import loadable from "@loadable/component";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
const MainLazy = React.lazy(() => import("./components/pages/Main/Main"));
const BirthdaysLazy = React.lazy(() => import("./components/pages/Birthdays/Birthdays"));

import "./fonts.scss";
import "./style.scss";

const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Birthdays">Birthdays</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense>
              <MainLazy />
              <BirthdaysLazy />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
};
export default App;
