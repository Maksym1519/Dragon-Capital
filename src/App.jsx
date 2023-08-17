import React from "react";
import { ReactDOM } from "react-dom";
import { lazy, Suspense } from "react";
import loadable from "@loadable/component";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
const MainLazy = React.lazy(() => import("./components/pages/Main/Main"));
const BirthdaysLazy = React.lazy(() =>
  import("./components/pages/Birthdays/Birthdays")
);
const DepartmentsLazy = React.lazy(() =>
  import("./components/pages/Departments/Departments.jsx")
);

import "./fonts.scss";
import "./style.scss";

const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Birthdays">Birthdays</Link>
        <Link to="/Departments">Departments</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense>
              <MainLazy />
            </React.Suspense>
          }
        ></Route>

        <Route
          path="/Birthdays"
          element={
            <React.Suspense>
              <BirthdaysLazy />
            </React.Suspense>
          }
        ></Route>

        <Route
          path="/Departments"
          element={
            <React.Suspense>
              <DepartmentsLazy />
            </React.Suspense>
          }
        ></Route>
      </Routes>
    </>
  );
};
export default App;
