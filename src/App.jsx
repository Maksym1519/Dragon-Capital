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
const StartingLazy = React.lazy(() =>
  import("./components/pages/Starting/Starting")
);
const CalendarLazy = React.lazy(() =>
  import("./components/pages/Departments/Calendar.jsx")
);
const HolidaysLazy = React.lazy(() =>
  import("./components/pages/Holidays/Holidays")
);
const HolidaysLastedLazy = React.lazy(() =>
  import("./components/pages/Holidays/HolidaysLasted")
);
const HolidaysAdminLazy = React.lazy(() =>
  import("./components/pages/Holidays/HolidaysAdmin")
);
const HolidaysAddLazy = React.lazy(() =>
  import("./components/pages/Holidays/HolidaysAdd")
);
const NotificationsLazy = React.lazy(() =>
  import("./components/pages/Notifications/Notifications")
);
const EmployeesLazy = React.lazy(() =>
  import("./components/pages/Employees/Employees")
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
        <Link to="/Calendar">Calendar</Link>
        <Link to="/Starting">Starting</Link>
        <Link to="/Holidays">Holidays</Link>
        <Link to="/HolidaysLasted">HolidaysLasted</Link>
        <Link to="/HolidaysAdmin">HolidaysAdmin</Link>
        <Link to="/HolidaysAdd">HolidaysAdd</Link>
        <Link to="/Notifications">Notifications</Link>
        <Link to="/Employees">Employees</Link>
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
        <Route
          path="/Starting"
          element={
            <React.Suspense>
              <StartingLazy />
            </React.Suspense>
          }
        ></Route>

        <Route
          path="/Calendar"
          element={
            <React.Suspense>
              <CalendarLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/Holidays"
          element={
            <React.Suspense>
              <HolidaysLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/HolidaysLasted"
          element={
            <React.Suspense>
              <HolidaysLastedLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/HolidaysAdmin"
          element={
            <React.Suspense>
              <HolidaysAdminLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/HolidaysAdd"
          element={
            <React.Suspense>
              <HolidaysAddLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/Notifications"
          element={
            <React.Suspense>
              <NotificationsLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/Employees"
          element={
            <React.Suspense>
              <EmployeesLazy />
            </React.Suspense>
          }
        ></Route>
      </Routes>
    </>
  );
};
export default App;
