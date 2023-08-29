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
const OrdersLazy = React.lazy(() =>
  import("./components/pages/Departments/Orders.jsx")
);
const FloorPlanLazy = React.lazy(() =>
  import("./components/pages/Departments/FloorPlan.jsx")
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
const MyPageLazy = React.lazy(() =>
  import("./components/pages/MyPage/MyPage")
);
const UserPageLazy = React.lazy(() =>
  import("./components/pages/UserPage/UserPage")
);
const UserPageBigLazy = React.lazy(() =>
  import("./components/pages/UserPage/UserPageBig")
);
const MyPageBigLazy = React.lazy(() =>
  import("./components/pages/MyPage/MyPageBig")
);
const AddEmployeeLazy = React.lazy(() =>
  import("./components/pages/AddEmployee/AddEmployee")
);
const AddEmployeeBigLazy = React.lazy(() =>
  import("./components/pages/AddEmployee/AddEmployeeBig")
);
const HistoryChangesLazy = React.lazy(() =>
  import("./components/pages/HistoryChanges/HistoryChanges")
);
const ReviewMainLazy = React.lazy(() =>
  import("./components/pages/ReviewMain/ReviewMain")
);
const ReviewCreateLazy = React.lazy(() =>
  import("./components/pages/ReviewCreate/ReviewCreate")
);
const ReviewAdminLazy = React.lazy(() =>
  import("./components/pages/ReviewAdmin/ReviewAdmin")
);
const ReviewArchivLazy = React.lazy(() =>
  import("./components/pages/ReviewArchiv/ReviewArchiv")
);
const ReviewAddArchivLazy = React.lazy(() =>
  import("./components/pages/ReviewArchiv/ReviewAddArchiv")
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
        <Link to="/Orders">Orders</Link>
        <Link to="/FloorPlan">FloorPlan</Link>
        <Link to="/Starting">Starting</Link>
        <Link to="/Holidays">Holidays</Link>
        <Link to="/HolidaysLasted">HolidaysLasted</Link>
        <Link to="/HolidaysAdmin">HolidaysAdmin</Link>
        <Link to="/HolidaysAdd">HolidaysAdd</Link>
        <Link to="/Notifications">Notifications</Link>
        <Link to="/Employees">Employees</Link>
        <Link to="/MyPage">MyPage</Link>
        <Link to="/UserPage">UserPage</Link>
        <Link to="/UserPageBig">UserPageBig</Link>
        <Link to="/MyPageBig">MyPageBig</Link>
        <Link to="/AddEmployee">AddEmployee</Link>
        <Link to="/AddEmployeeBig">AddEmployeeBig</Link>
        <Link to="/HistoryChanges">HistoryChanges</Link>
        <Link to="/ReviewMain">ReviewMain</Link>
        <Link to="/ReviewCreate">ReviewCreate</Link>
        <Link to="/ReviewAdmin">ReviewAdmin</Link>
        <Link to="/ReviewArchiv">ReviewArchiv</Link>
        <Link to="/ReviewAddArchiv">ReviewAddArchiv</Link>
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
          path="/Orders"
          element={
            <React.Suspense>
              <OrdersLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/FloorPlan"
          element={
            <React.Suspense>
              <FloorPlanLazy />
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
        <Route
          path="/MyPage"
          element={
            <React.Suspense>
              <MyPageLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/UserPage"
          element={
            <React.Suspense>
              <UserPageLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/UserPageBig"
          element={
            <React.Suspense>
              <UserPageBigLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/MyPageBig"
          element={
            <React.Suspense>
              <MyPageBigLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/AddEmployee"
          element={
            <React.Suspense>
              <AddEmployeeLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/AddEmployeeBig"
          element={
            <React.Suspense>
              <AddEmployeeBigLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/HistoryChanges"
          element={
            <React.Suspense>
              <HistoryChangesLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/ReviewMain"
          element={
            <React.Suspense>
              <ReviewMainLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/ReviewCreate"
          element={
            <React.Suspense>
              <ReviewCreateLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/ReviewAdmin"
          element={
            <React.Suspense>
              <ReviewAdminLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/ReviewArchiv"
          element={
            <React.Suspense>
              <ReviewArchivLazy />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/ReviewAddArchiv"
          element={
            <React.Suspense>
              <ReviewAddArchivLazy />
            </React.Suspense>
          }
        ></Route>
      </Routes>
    </>
  );
};
export default App;
